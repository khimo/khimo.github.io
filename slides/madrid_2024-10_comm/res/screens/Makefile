all: BLA_find_host.gif BEO_integration.gif

BLA_find_host.gif: $(wildcard bli_*.jpeg)
	convert -delay 70 -loop 0 bli_*.jpeg BLA_find_host.gif

BEO_integration.gif: $(wildcard beo_*.jpeg)
	convert -delay 70 -loop 0 beo_*.jpeg BEO_integration.gif

