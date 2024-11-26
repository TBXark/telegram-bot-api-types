.PHONY: gen
gen:
	go run main.go

.PHONY: pub
pub:
	cd ./dist/dts && npm publish
	cd ./dist/jsdoc && npm publish