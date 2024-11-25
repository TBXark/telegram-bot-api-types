.PHONY: gen
gen:
	go run ./cmd/gen/main.go

.PHONY: pub
pub:
	go run ./cmd/pub/main.go