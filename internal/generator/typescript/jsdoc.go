package typescript

import (
	"encoding/json"
	"github.com/TBXark/telegram-bot-api-types/internal/generator/tmpl"
	"github.com/TBXark/telegram-bot-api-types/internal/scrape"
	"os"
	"path/filepath"
)

const responseGenericJsDoc = `
/**
 * @template T
 * @typedef {Object} ResponseSuccess<T>
 * @property {true} ok 
 * @property {T} result
 */

/**
 * @typedef {Object} ResponseError
 * @property {false} ok 
 * @property {number} error_code 
 * @property {string} description
 */

/**
 * @typedef {true} SuccessWithOutData
 */

/**
 * @typedef {ResponseSuccess<SuccessWithOutData>} ResponseWithOutData
 */

/**
 * @typedef {ResponseSuccess<Message>} ResponseWithMessage
 */
`

const enumsJsDocTemplate = `
/**
 * @typedef {( {{ToEnumValues .Values}} )} {{.Name}}
*/
`

const typesJsDocTemplate = `
/**
 * {{.Href}}  {{range .Description}}
 * {{.}}{{end}}
{{- if IsAbstractType .}}
 * @typedef { {{- UnionsTypes .Subtypes -}} } {{.Name}}
{{- else}}
 * @typedef {Object} {{.Name}}
{{- range .Fields}}
 * @property { {{- ToFieldTypes . -}} } {{if .Required}}{{.Name}}{{else}}[{{.Name}}]{{end}} - {{.Description}}
{{- end}}
{{- end}}
 */
`

const paramsJsDocTemplate = `
/**
 * {{.Href}}  {{range .Description}}
 * {{.}}{{end}}
 * @typedef {Object} {{ToPascalCase .Name}}Params
{{- range .Fields}}
 * @property { {{- ToFieldTypes . -}} } {{if .Required}}{{.Name}}{{else}}[{{.Name}}]{{end}} - {{.Description}}
{{- end}}
 */
`

const methodJsDocTemplate = `
{{- if HasResponse .Returns}}
/**
 * @typedef {ResponseSuccess<{{UnionsTypes .Returns}}>} {{ToPascalCase .Name}}Response
 */
{{end}}
/**
 * {{.Href}}
 * @interface {{ToPascalCase .Name}}Request
 *
 {{- range .Description}}
 * {{.}}
 {{end -}}
 * @function {{.Name}}
 * @memberof {{ToPascalCase .Name}}Request
{{if HasParams .}} * @param { {{ToPascalCase .Name}}Params } {{if IsParamsOptional .Fields}}[params]{{else}}params{{end}}{{end}}
 * @returns {Promise<Response>}
 *
{{- if HasResponse .Returns}}
 * @function {{.Name}}WithReturns
 * @memberof {{ToPascalCase .Name}}Request
{{if HasParams .}} * @param { {{ToPascalCase .Name}}Params } {{if IsParamsOptional .Fields}}[params]{{else}}params{{end}}{{end}}
 * @returns {Promise<{{ToPascalCase .Name}}Response>}
{{- end}}
 */
`

const footerJsDocTemplate = `
/**
 * @typedef {({{.BotMethod}})} BotMethod
 */

/**
 * @typedef { {{- .AllBotMethods -}} } AllBotMethods
 */
`

func RenderJsDoc(resp *scrape.APIResponse, dir string) error {

	jsDocPath := filepath.Join(dir, "jsdoc", "index.js")
	packageJsonPath := filepath.Join(dir, "jsdoc", "package.json")

	jsDoc, err := os.Create(jsDocPath)
	if err != nil {
		return err
	}
	packJson, err := os.Create(packageJsonPath)
	if err != nil {
		return err
	}

	err = Render(tmpl.Conf{
		EnumsTemplate:   enumsJsDocTemplate,
		TypesTemplate:   typesJsDocTemplate,
		ParamsTemplate:  paramsJsDocTemplate,
		MethodTemplate:  methodJsDocTemplate,
		FooterTemplate:  footerJsDocTemplate,
		ResponseGeneric: responseGenericJsDoc,
	}, resp, jsDoc)
	if err != nil {
		return err
	}

	pkg := NewPackage("telegram-bot-api-jsdoc", resp.Version)
	pkg.Main = "index.js"
	pkg.Module = "index.js"
	pkg.Files = []string{"index.js"}

	encoder := json.NewEncoder(packJson)
	encoder.SetIndent("", "  ")
	return encoder.Encode(pkg)
}
