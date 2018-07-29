default: run

build:
	elm-make src/Main.elm --output run/elm.compiled.js --warn

# work directly with elm files
# this allows you to see update history (state changes)
.PHONY: run
run:
	elm-reactor

# watch elm files and recompile js on elm file change
# this allows you to preview the index.html (with styles, etc.)
watch:
	npm run watch
