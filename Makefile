.PHONY: all clean clobber
all: js/main.js

js/%.js: js/%.roy
	roy $<


clean:
	rm -rf js/*.js.map js/*.roym

clobber: clean
	# nah, don't delete the js files. what if I want to mix roy and js code?
	#rm -rf js/*.js
