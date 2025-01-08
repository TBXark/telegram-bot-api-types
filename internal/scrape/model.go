package scrape

type Field struct {
	Name        string   `json:"name"`
	Types       []string `json:"types"`
	Required    bool     `json:"required"`
	Description string   `json:"description"`
	Const       string   `json:"const,omitempty"`
}

type Category int

func (c Category) String() string {
	switch c {
	case CategoryType:
		return "Type"
	case CategoryMethod:
		return "Method"
	default:
		return "Unknown"
	}
}

const (
	CategoryType Category = iota
	CategoryMethod
)

type Base struct {
	category    Category
	Name        string   `json:"name"`
	Href        string   `json:"href,omitempty"`
	Description []string `json:"description,omitempty"`
	Fields      []*Field `json:"fields,omitempty"`
}

type Type struct {
	Base
	Subtypes  []string `json:"subtypes,omitempty"`
	SubtypeOf []string `json:"subtype_of,omitempty"`
}

type Method struct {
	Base
	Returns []string `json:"returns"`
}

type Enum struct {
	Name   string   `json:"name"`
	Values []string `json:"values"`
}

type APIResponse struct {
	Version     string    `json:"version"`
	ReleaseDate string    `json:"release_date"`
	Changelog   string    `json:"changelog"`
	Methods     []*Method `json:"methods"`
	Types       []*Type   `json:"types"`
	Enums       []*Enum   `json:"enums"`
}

type BaseData interface {
	GetBase() *Base
}

func (t *Type) GetBase() *Base {
	return &t.Base
}

func (m *Method) GetBase() *Base {
	return &m.Base
}
