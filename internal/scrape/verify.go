package scrape

import (
	"fmt"
	"strings"
)

var (
	CoreTypes = map[string]struct{}{
		"String":  {},
		"Boolean": {},
		"Integer": {},
		"Float":   {},
	}
	approvedNoSubtypes = map[string]struct{}{
		"InputFile": {},
	}
	approvedMultiReturns = [][]string{
		{"Message", "Boolean"},
	}
)

func Verify(items *APIResponse) bool {
	return verifyTypeParameters(items) || verifyMethodParameters(items)
}

func genTypesSet(items *APIResponse) map[string]*Type {
	types := make(map[string]*Type, len(items.Types)+len(items.Enums))
	for _, t := range items.Types {
		types[t.Name] = t
	}
	for _, e := range items.Enums {
		types[e.Name] = nil
	}
	return types
}

func verifyTypeParameters(items *APIResponse) bool {
	issueFound := false
	types := genTypesSet(items)
	for _, values := range items.Types {
		// check all values have a URL
		if values.Href == "" {
			fmt.Printf("%s has no link!\n", values.Name)
			issueFound = true
			continue
		}

		if len(values.Fields) == 0 {
			subtypes := values.Subtypes
			description := strings.ToLower(strings.Join(values.Description, ""))

			// Some types are abstract and have no information or subtypes - this is mentioned in their description.
			// Otherwise, check if they're manually approved.
			if len(subtypes) == 0 {
				if !strings.Contains(description, "currently holds no information") {
					if _, ok := approvedNoSubtypes[values.Name]; !ok {
						fmt.Printf("TYPE %s has no fields or subtypes, and is not approved\n", values.Name)
						issueFound = true
						continue
					}
				}
			}

			for _, st := range subtypes {
				if subtype, ok := types[st]; ok {
					if subtype == nil {
						continue
					}
					if subtype.SubtypeOf == nil {
						subtype.SubtypeOf = []string{values.Name}
					} else {
						subtype.SubtypeOf = append(subtype.SubtypeOf, values.Name)
					}
				} else {
					fmt.Printf("TYPE %s USES INVALID SUBTYPE %s\n", values.Name, st)
					issueFound = true
				}
			}
		}

		// check all parameter types are valid
		for _, param := range values.Fields {
			for _, fieldTypeName := range param.Types {
				for strings.HasPrefix(fieldTypeName, "Array of ") {
					fieldTypeName = fieldTypeName[len("Array of "):]
				}
				if _, ok := types[fieldTypeName]; ok {
					continue
				}
				if _, ok := CoreTypes[fieldTypeName]; ok {
					continue
				}
				fmt.Printf("UNKNOWN FIELD TYPE %s\n", fieldTypeName)
				issueFound = true
			}
		}
	}

	return issueFound
}

func verifyMethodParameters(items *APIResponse) bool {
	issueFound := false
	types := genTypesSet(items)
	for method, values := range items.Methods {
		// check all values have a URL
		if values.Href == "" {
			fmt.Printf("%s has no link!\n", method)
			issueFound = true
			continue
		}

		// check all methods have a return
		if len(values.Returns) == 0 {
			fmt.Printf("%s has no return types!\n", method)
			issueFound = true
			continue
		}

		// If we have multiple returns, this is an edge case, but not a deal-breaker
		// Some multi-returns are common and pre-approved
		if len(values.Returns) > 1 {
			approved := false
			for _, approvedReturns := range approvedMultiReturns {
				if stringSliceEqual(values.Returns, approvedReturns) {
					approved = true
					break
				}
			}
			if !approved {
				fmt.Printf("%s has multiple return types: %v\n", method, values.Returns)
			}
		}

		// check all parameter types are valid
		for _, param := range values.Fields {
			for _, t := range param.Types {
				fieldType := t
				for strings.HasPrefix(fieldType, "Array of ") {
					fieldType = fieldType[len("Array of "):]
				}

				if _, ok := types[fieldType]; ok {
					continue
				}
				if _, ok := CoreTypes[fieldType]; ok {
					continue
				}
				issueFound = true
				fmt.Printf("UNKNOWN PARAM TYPE %s\n", fieldType)
			}
		}

		// check all return types are valid
		for _, ret := range values.Returns {
			returnType := ret
			for strings.HasPrefix(returnType, "Array of ") {
				returnType = returnType[len("Array of "):]
			}

			if _, ok := types[returnType]; ok {
				continue
			}
			if _, ok := CoreTypes[returnType]; ok {
				continue
			}
			issueFound = true
			fmt.Printf("UNKNOWN RETURN TYPE %s\n", returnType)
		}
	}

	return issueFound
}

// stringSliceEqual 检查两个字符串切片是否相等
func stringSliceEqual(a, b []string) bool {
	if len(a) != len(b) {
		return false
	}
	for i := range a {
		if a[i] != b[i] {
			return false
		}
	}
	return true
}
