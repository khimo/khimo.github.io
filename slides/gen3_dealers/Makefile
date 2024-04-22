
.PHONY: translate

translate: index.es.md


%.es.md: %.md
	cat $< | tulp 'translate to spanish, while keeping all the markup in place, in this markdown document that will use revealjs to create a presentation. Please keep all the html tags in place and do not change the line that only have the word "Note:" (it is a keyword when it is alone)' > $@
