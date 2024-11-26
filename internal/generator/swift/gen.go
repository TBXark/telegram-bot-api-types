package swift

import (
	_ "embed"
	"fmt"
	"github.com/TBXark/telegram-bot-api-types/internal/generator/tmpl"
	"github.com/TBXark/telegram-bot-api-types/internal/scrape"
	"os"
	"path/filepath"
	"strings"
	"text/template"
)

//go:embed swift.tmpl
var swiftTemplate string

//go:embed either.tmpl
var eitherTemplate string

func toSwiftType(t string) string {
	switch t {
	case "Integer":
		return "Int"
	case "Float":
		return "Float"
	case "String":
		return "String"
	case "Boolean":
		return "Bool"
	default:
		return t
	}
}

func UnionsTypes(types []string) string {
	either := make([]string, 0, len(types))
	for _, t := range types {
		arrayWrap := 0
		_type := t
		for strings.HasPrefix(_type, "Array of ") {
			_type = _type[len("Array of "):]
			arrayWrap++
		}
		if arrayWrap == 0 {
			either = append(either, toSwiftType(_type))
		} else {
			var sb strings.Builder
			for i := 0; i < arrayWrap; i++ {
				sb.WriteString("Array<")
			}
			sb.WriteString(toSwiftType(_type))
			for i := 0; i < arrayWrap; i++ {
				sb.WriteString(">")
			}
			either = append(either, sb.String())
		}
	}
	if len(either) == 0 {
		return "void"
	}
	if len(either) == 1 {
		return either[0]
	}
	return fmt.Sprintf("Either%d<%s>", len(either), strings.Join(either, ", "))
}

func ToFieldTypes(field *scrape.Field) string {
	return UnionsTypes(field.Types)
}

type Either struct {
	Count  int
	Values []string
}

func RenderSwift(resp *scrape.APIResponse, dir string) error {
	copyResp := &(*resp)

	// 防止struct循环引用
	wrapperFields := map[string]map[string]struct{}{
		"Message":           {"reply_to_message": {}},
		"GiveawayCompleted": {"giveaway_message": {}},
	}
	maxEither := 2
	for _, t := range copyResp.Types {
		for _, f := range t.Fields {
			if len(f.Types) > maxEither {
				maxEither = len(f.Types)
			}
			if fields, ok := wrapperFields[t.Name]; ok {
				if _, exist := fields[f.Name]; exist {
					if len(f.Types) == 1 {
						f.Types = []string{
							fmt.Sprintf("ValueWrapper<%s>", f.Types[0]),
						}
					}
				}
			}
		}
	}
	swiftPath := filepath.Join(dir, "swift", "index.swift")
	file, err := os.Create(swiftPath)
	if err != nil {
		return err
	}
	err = tmpl.Render(tmpl.Conf{
		Template: swiftTemplate,
		FuncMap: tmpl.FuncMap{
			UnionsTypes:  UnionsTypes,
			ToFieldTypes: ToFieldTypes,
		},
	}, copyResp, file)
	if err != nil {
		return err
	}

	eitherList := make([]Either, 0, maxEither-1)
	for i := 2; i <= maxEither; i++ {
		either := Either{
			Count:  i,
			Values: make([]string, i),
		}
		for j := 0; j < i; j++ {
			either.Values[j] = string(rune('A' + j))
		}
		eitherList = append(eitherList, either)
	}
	parse, err := template.New("either").Funcs(template.FuncMap{
		"ToCamelCase": tmpl.ToCamelCase,
	}).Parse(eitherTemplate)
	if err != nil {
		return err
	}

	err = parse.Execute(file, eitherList)
	if err != nil {
		return err
	}

	return nil
}
