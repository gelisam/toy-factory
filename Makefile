.PHONY: all clean clobber
all: roy/prelude.js roy/main.js

roy/%.js: roy/%.roy
	roy $<


clean:
	rm -rf roy/*.js.map roy/*.roym

clobber: clean
	rm -rf roy/*.js
