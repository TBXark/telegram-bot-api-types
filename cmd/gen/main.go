package main

import (
	"github.com/TBXark/telegram-bot-api-types/internal/generator/spec"
	"github.com/TBXark/telegram-bot-api-types/internal/generator/swift"
	"github.com/TBXark/telegram-bot-api-types/internal/generator/typescript"
	"github.com/TBXark/telegram-bot-api-types/internal/scrape"
	"log"
)

type Generator interface {
	Generate(resp *scrape.APIResponse, dir string) error
}

type GeneratorFunc func(resp *scrape.APIResponse, dir string) error

func (f GeneratorFunc) Generate(resp *scrape.APIResponse, dir string) error {
	return f(resp, dir)
}

func main() {

	items, err := scrape.RetrieveInfo()
	if err != nil {
		log.Fatalf("Failed to retrieve info: %v", err)
	}
	if scrape.Verify(items) {
		log.Fatalf("Errors found in API data")
	}

	generator := []Generator{
		GeneratorFunc(typescript.RenderDTS),
		GeneratorFunc(typescript.RenderJsDoc),
		GeneratorFunc(spec.RenderSpec),
		GeneratorFunc(swift.RenderSwift),
	}

	for _, gen := range generator {
		e := gen.Generate(items, "./dist")
		if e != nil {
			log.Fatalf("Failed to generate: %v", e)
		}
	}
}
