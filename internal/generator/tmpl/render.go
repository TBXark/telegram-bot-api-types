package tmpl

import (
	"fmt"
	"github.com/TBXark/telegram-bot-api-types/internal/scrape"
	"io"
	"strings"
	"text/template"
)

type FuncMap struct {
	ToEnumValues func([]string) string
	ToFieldTypes func(*scrape.Field) string
	UnionsTypes  func([]string) string
}

type Conf struct {
	EnumsTemplate   string
	TypesTemplate   string
	ParamsTemplate  string
	MethodTemplate  string
	FooterTemplate  string
	ResponseGeneric string
	FuncMap         FuncMap
}

func HasResponse(types []string) bool {
	if len(types) == 0 {
		return false
	}
	if len(types) == 1 && types[0] == "Boolean" {
		return false
	}
	return true
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

func ToPascalCase(str string) string {
	return strings.ToUpper(string(str[0])) + str[1:]
}

func ToTypesDoc(types []string) string {
	return strings.Join(types, " or ")
}

func Render(conf Conf, resp *scrape.APIResponse, writer io.Writer) error {
	funcMap := template.FuncMap{
		"ToEnumValues":     conf.FuncMap.ToEnumValues,
		"ToFieldTypes":     conf.FuncMap.ToFieldTypes,
		"UnionsTypes":      conf.FuncMap.UnionsTypes,
		"ToPascalCase":     ToPascalCase,
		"ToTypesDoc":       ToTypesDoc,
		"HasResponse":      HasResponse,
		"HasParams":        HasParams,
		"IsAbstractType":   IsAbstractType,
		"IsParamsOptional": IsParamsOptional,
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
