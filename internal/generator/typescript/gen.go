package typescript

import (
	"fmt"
	"github.com/TBXark/telegram-bot-api-types/internal/generator/tmpl"
	"github.com/TBXark/telegram-bot-api-types/internal/scrape"
	"io"
	"strings"
)

func toTypeScriptType(t string) string {
	switch t {
	case "Integer", "Float":
		return "number"
	case "String":
		return "string"
	case "Boolean":
		return "boolean"
	default:
		return t
	}
}

func UnionsTypes(types []string) string {
	var sb strings.Builder
	for i, t := range types {
		arrayWrap := 0
		_type := t
		for strings.HasPrefix(_type, "Array of ") {
			_type = _type[len("Array of "):]
			arrayWrap++
		}
		if i > 0 {
			sb.WriteString(" | ")
		}
		if arrayWrap == 0 {
			sb.WriteString(toTypeScriptType(_type))
		} else {
			for i := 0; i < arrayWrap; i++ {
				sb.WriteString("Array<")
			}
			sb.WriteString(toTypeScriptType(_type))
			for i := 0; i < arrayWrap; i++ {
				sb.WriteString(">")
			}
		}
	}
	return sb.String()
}

func ToFieldTypes(field *scrape.Field) string {
	if field.Const != "" && len(field.Types) == 1 && field.Types[0] == "String" {
		return fmt.Sprintf("'%s'", field.Const)
	}
	return UnionsTypes(field.Types)
}

func ToEnumValues(values []string) string {
	v := make([]string, 0, len(values))
	for _, val := range values {
		v = append(v, fmt.Sprintf("'%s'", val))
	}
	return strings.Join(v, " | ")
}

func Render(conf tmpl.Conf, resp *scrape.APIResponse, writer io.Writer) error {
	conf.FuncMap = tmpl.FuncMap{
		ToEnumValues: ToEnumValues,
		ToFieldTypes: ToFieldTypes,
		UnionsTypes:  UnionsTypes,
	}
	return tmpl.Render(conf, resp, writer)
}