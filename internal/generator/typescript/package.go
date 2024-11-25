package typescript

import "strings"

type Package struct {
	Name        string   `json:"name"`
	Version     string   `json:"version"`
	Description string   `json:"description"`
	Repository  string   `json:"repository"`
	Type        string   `json:"type"`
	Author      string   `json:"author"`
	License     string   `json:"license"`
	Types       string   `json:"types,omitempty"`
	Main        string   `json:"main,omitempty"`
	Module      string   `json:"module,omitempty"`
	Files       []string `json:"files,omitempty"`
}

func NewPackage(name, version string) *Package {
	if strings.Count(version, ".") < 2 {
		version += ".0"
	}
	return &Package{
		Name:        name,
		Version:     version,
		Description: "Telegram Bot API types",
		Repository:  "git@github.com:TBXark/telegram-bot-api-types.git",
		Type:        "module",
		Author:      "TBXark",
		License:     "MIT",
	}
}
