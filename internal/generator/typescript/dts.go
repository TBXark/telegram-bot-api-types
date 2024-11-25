package typescript

import (
	"encoding/json"
	"github.com/TBXark/telegram-bot-api-types/internal/scrape"
	"os"
	"path/filepath"
)

const responseGeneric = `
export interface ResponseSuccess<T> {
    ok: true;
    result: T;
}

export interface ResponseError {
    ok: false;
    error_code: number;
    description: string;
}

export type SuccessWithOutData = true;

export type ResponseWithOutData = ResponseSuccess<SuccessWithOutData>;

export type ResponseWithMessage = ResponseSuccess<Message>;
`

const enumsTemplate = `
export type {{.Name}} = {{ToEnumValues .Values}};
`

const typesTemplate = `
/** 
 * {{.Href}}  {{range .Description}}
 * {{.}}{{end}}
*/
{{- if IsAbstractType .}}
export type {{.Name}} = {{ToTsTypes .Subtypes}};
{{- else}}
export interface {{.Name}} {
    {{- range .Fields}}
    /** {{ToTypeDoc .Types}} | {{.Description}} */
    {{.Name}}{{if .Required}}: {{else}}?: {{end}}{{ToFieldTypes .}};
    {{- end}}
}
{{- end}}
`

const paramsTemplate = `
/** {{.Href}} */
export interface {{ToPascalCase .Name}}Params {
    {{- range .Fields}}
    /** {{ToTypeDoc .Types}} | {{.Description}} */
    {{.Name}}{{if .Required}}: {{else}}?: {{end}}{{ToFieldTypes .}};
    {{- end}}
}
`

const methodTemplate = `
{{if HasResponse .Returns -}}
/** {{.Href}} */
export type {{ToPascalCase .Name}}Response = ResponseSuccess<{{ToTsTypes .Returns}}>;

{{end -}}
export interface {{ToPascalCase .Name}}Request {
    /** 
     * {{.Href}}{{range .Description}}
     * {{.}}{{end}}
     */
    {{.Name}}: {{if HasParams .}}(params{{if IsParamsOptional .Fields}}?: {{else}}: {{end}}{{ToPascalCase .Name}}Params){{else}}(){{end}} => Promise<Response>;
    {{- if HasResponse .Returns}}
    /** * {{.Href}}{{range .Description}}
     * {{.}}{{end}}
     */
    {{.Name}}WithReturns: {{if HasParams .}}(params{{if IsParamsOptional .Fields}}?: {{else}}: {{end}}{{ToPascalCase .Name}}Params){{else}}(){{end}} => Promise<{{ToPascalCase .Name}}Response>;
    {{- end}}
}
`

const footerTemplate = `
export type BotMethod = {{.BotMethod}}

export type AllBotMethods = {{.AllBotMethods}}
`

func RenderDTS(resp *scrape.APIResponse, dir string) error {

	dtsPath := filepath.Join(dir, "dts", "index.d.ts")
	packageJsonPath := filepath.Join(dir, "dts", "package.json")

	jsDoc, err := os.Create(dtsPath)
	if err != nil {
		return err
	}
	packJson, err := os.Create(packageJsonPath)
	if err != nil {
		return err
	}

	err = render(templateConf{
		EnumsTemplate:   enumsTemplate,
		TypesTemplate:   typesTemplate,
		ParamsTemplate:  paramsTemplate,
		MethodTemplate:  methodTemplate,
		FooterTemplate:  footerTemplate,
		ResponseGeneric: responseGeneric,
	}, resp, jsDoc)
	if err != nil {
		return err
	}

	pkg := NewPackage("telegram-bot-api-types", resp.Version)
	pkg.Types = "index.d.ts"
	pkg.Files = []string{"index.d.ts"}

	encoder := json.NewEncoder(packJson)
	encoder.SetIndent("", "  ")
	return encoder.Encode(pkg)
}
