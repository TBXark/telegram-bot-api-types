package typescript

import (
	"fmt"
	"github.com/TBXark/telegram-bot-api-types/internal/scrape"
	"io"
	"strings"
	"text/template"
)

func toTsType(t string) string {
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

func ToTsTypes(types []string) string {
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
			sb.WriteString(toTsType(_type))
		} else {
			for i := 0; i < arrayWrap; i++ {
				sb.WriteString("Array<")
			}
			sb.WriteString(toTsType(_type))
			for i := 0; i < arrayWrap; i++ {
				sb.WriteString(">")
			}
		}
	}
	return sb.String()
}

func ToTypeDoc(types []string) string {
	return strings.Join(types, ",")
}

func ToFieldTypes(field *scrape.Field) string {
	if field.Const != "" && len(field.Types) == 1 && field.Types[0] == "String" {
		return fmt.Sprintf("'%s'", field.Const)
	}
	return ToTsTypes(field.Types)
}

func ToEnumValues(values []string) string {
	v := make([]string, 0, len(values))
	for _, val := range values {
		v = append(v, fmt.Sprintf("'%s'", val))
	}
	return strings.Join(v, " | ")
}

func HasResponse(types []string) bool {
	return ToTsTypes(types) != "boolean"
}

func HasParams(method *scrape.Method) bool {
	return len(method.Fields) > 0
}

func IsAbstractType(t *scrape.Type) bool {
	return len(t.Fields) == 0 && len(t.Subtypes) > 0
}

func IsParamsOptional(fields []*scrape.Field) bool {
	for _, f := range fields {
		if f.Required {
			return false
		}
	}
	return true
}

type templateConf struct {
	EnumsTemplate   string
	TypesTemplate   string
	ParamsTemplate  string
	MethodTemplate  string
	FooterTemplate  string
	ResponseGeneric string
}

func render(conf templateConf, resp *scrape.APIResponse, writer io.Writer) error {
	ToPascalCase := func(str string) string {
		return strings.ToUpper(string(str[0])) + str[1:]
	}
	funcMap := template.FuncMap{
		"ToTsTypes":        ToTsTypes,
		"ToTypeDoc":        ToTypeDoc,
		"ToFieldTypes":     ToFieldTypes,
		"ToEnumValues":     ToEnumValues,
		"IsParamsOptional": IsParamsOptional,
		"IsAbstractType":   IsAbstractType,
		"HasResponse":      HasResponse,
		"HasParams":        HasParams,
		"ToPascalCase":     ToPascalCase,
	}

	enumsTmpl, err := template.New("enums").Funcs(funcMap).Parse(conf.EnumsTemplate)
	if err != nil {
		return err
	}

	typesTmpl, err := template.New("types").Funcs(funcMap).Parse(conf.TypesTemplate)
	if err != nil {
		return err
	}

	methodParamsTmpl, err := template.New("methodParams").Funcs(funcMap).Parse(conf.ParamsTemplate)
	if err != nil {
		return err
	}

	methodTmpl, err := template.New("method").Funcs(funcMap).Parse(conf.MethodTemplate)
	if err != nil {
		return err
	}

	footerTmpl, err := template.New("footer").Funcs(funcMap).Parse(conf.FooterTemplate)
	if err != nil {
		return err
	}

	_, err = writer.Write([]byte("/** Version: " + resp.Version + " */\n"))
	if err != nil {
		return err
	}

	for _, t := range resp.Enums {
		e := enumsTmpl.Execute(writer, t)
		if e != nil {
			return e
		}
	}

	for _, t := range resp.Types {
		e := typesTmpl.Execute(writer, t)
		if e != nil {
			return e
		}
	}

	_, err = writer.Write([]byte(conf.ResponseGeneric))
	if err != nil {
		return err
	}

	var botMethod strings.Builder
	var allBotMethods strings.Builder
	for i, m := range resp.Methods {
		if i != 0 {
			botMethod.WriteString(" | ")
			allBotMethods.WriteString(" & ")
		}
		botMethod.WriteString(fmt.Sprintf("'%s'", m.Name))
		allBotMethods.WriteString(fmt.Sprintf("%sRequest", ToPascalCase(m.Name)))
		if HasParams(m) {
			e := methodParamsTmpl.Execute(writer, m)
			if e != nil {
				return e
			}
		}
		e := methodTmpl.Execute(writer, m)
		if e != nil {
			return e
		}
	}

	footer := map[string]string{
		"BotMethod":     botMethod.String(),
		"AllBotMethods": allBotMethods.String(),
	}

	e := footerTmpl.Execute(writer, footer)
	if e != nil {
		return e
	}

	return nil
}
