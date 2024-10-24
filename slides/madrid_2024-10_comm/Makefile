
.PHONY: translate

translate: index.es.md index.pt.md training.es.md 


%.es.md: %.md
	cat $< | tulp 'translate to Spanish, while keeping all the markup in place, in this markdown document that will use revealjs to create a presentation. Please keep all the HTML tags in place and do not change the line that only has the word "Note:" (it is a keyword when it is alone); Be careful that some literal words should not be translated, like System, Zone, Area, Resource, when they are used inside a literal or a path.; Please keep empty lines and spaces, they are really important.' > $@



%.pt.md: %.md
	cat $< | tulp 'translate to portuguese (from Portugal), while keeping all the markup in place, in this markdown document that will use revealjs to create a presentation. Please keep all the HTML tags in place and do not change the line that only has the word "Note:" (it is a keyword when it is alone); Be careful that some literal words should not be translated, like System, Zone, Area, Resource, when they are used inside a literal or a path. Please keep empty lines and spaces.' > $@

server:
	cd ../../; bundle exec jekyll serve
