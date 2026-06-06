#!/usr/bin/env python3
"""Generate per-page AI `summary` + `keywords` front-matter for Pagefind.

For every Jekyll source page/collection-doc that does NOT already have a
`summary:` key, this strips the body to plain text, asks Claude for a one-
paragraph summary and 5-8 keywords, and injects them into the YAML front-matter
*in place*. Pages are then re-indexed by Pagefind via the `summary`/`keywords`
convention (see _includes/pagefind-meta.html).

Usage:
    export ANTHROPIC_API_KEY=sk-ant-...
    python3 bin/gen-search-meta.py            # all pages missing a summary
    python3 bin/gen-search-meta.py --force    # regenerate even if present
    python3 bin/gen-search-meta.py path/to/page.md ...   # specific files
    python3 bin/gen-search-meta.py --dry-run  # print, don't write

This is the *bulk* path. The important top-level pages are already seeded by
hand as working examples; run this to fill in the long tail (100+ drivers etc.).
"""
import os, re, sys, glob

MODEL = "claude-opus-4-7"
ROOTS = ["*.md", "*.html", "bli-guides/**/*.md", "bli-guides/**/*.html",
         "help_drivers/*.html", "products/**/*.md"]
SKIP_LAYOUTS = {"slides"}
FM_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.DOTALL)

PROMPT = """You are writing search-index metadata for the BeoLiving Intelligence
(by khimo) smart-home documentation site. Given the page title and body, return
exactly two lines and nothing else:

SUMMARY: <one factual sentence (max 35 words) describing what the page covers, plain, no marketing fluff>
KEYWORDS: <5-8 lowercase comma-separated search keywords/phrases>

Title: {title}

Body (truncated):
{body}
"""

def strip_md(text):
    text = re.sub(r"```.*?```", " ", text, flags=re.DOTALL)
    text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"[#>*_`|>-]", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()[:4000]

def parse_fm(src):
    m = FM_RE.match(src)
    if not m:
        return None, src
    return m.group(1), src[m.end():]

def get_title(fm, path):
    m = re.search(r"^title:\s*(.+)$", fm or "", re.MULTILINE)
    if m:
        return m.group(1).strip().strip("'\"")
    return os.path.splitext(os.path.basename(path))[0].replace("-", " ")

def generate(client, title, body):
    msg = client.messages.create(
        model=MODEL, max_tokens=300,
        messages=[{"role": "user",
                   "content": PROMPT.format(title=title, body=strip_md(body))}],
    )
    text = msg.content[0].text
    summ = re.search(r"SUMMARY:\s*(.+)", text)
    kws = re.search(r"KEYWORDS:\s*(.+)", text)
    return (summ.group(1).strip() if summ else "",
            kws.group(1).strip() if kws else "")

def yaml_escape(s):
    return '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'

def inject(fm, summary, keywords):
    fm = re.sub(r"^summary:.*$\n?", "", fm, flags=re.MULTILINE)
    fm = re.sub(r"^keywords:.*$\n?", "", fm, flags=re.MULTILINE)
    fm = fm.rstrip("\n")
    return f"{fm}\nsummary: {yaml_escape(summary)}\nkeywords: {yaml_escape(keywords)}\n"

def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    force = "--force" in sys.argv
    dry = "--dry-run" in sys.argv

    if args:
        files = args
    else:
        files = []
        for pat in ROOTS:
            files += glob.glob(pat, recursive=True)
        files = sorted(set(files))

    client = None
    if not dry:
        import anthropic
        client = anthropic.Anthropic()

    for path in files:
        with open(path, encoding="utf-8") as f:
            src = f.read()
        fm, body = parse_fm(src)
        if fm is None:
            continue  # no front-matter → not a rendered Jekyll page we want
        layout = re.search(r"^layout:\s*(\S+)", fm, re.MULTILINE)
        if layout and layout.group(1) in SKIP_LAYOUTS:
            continue
        if not force and re.search(r"^summary:", fm, re.MULTILINE):
            continue
        title = get_title(fm, path)
        print(f"[gen] {path}  ({title})")
        if dry:
            continue
        summary, keywords = generate(client, title, body)
        if not summary:
            print(f"  !! no summary returned, skipping")
            continue
        new_fm = inject(fm, summary, keywords)
        with open(path, "w", encoding="utf-8") as f:
            f.write(f"---\n{new_fm}---\n{body}")
        print(f"  ok  summary={summary[:60]}…")

if __name__ == "__main__":
    main()
