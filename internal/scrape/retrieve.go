package scrape

import (
	"fmt"
	"net/http"
	"os"
	"regexp"
	"strings"
	"unicode"

	"github.com/PuerkitoBio/goquery"
)

const (
	rootURL   = "https://core.telegram.org"
	botDocURL = "https://core.telegram.org/bots/api"
)

var (
	defaultEnums = []*Enum{
		{
			Name:   "ChatType",
			Values: []string{"private", "group", "supergroup", "channel"},
		},
		{
			Name:   "ChatAction",
			Values: []string{"typing", "upload_photo", "record_video", "upload_video", "record_voice", "upload_voice", "upload_document", "find_location", "record_video_note", "upload_video_note"},
		},
		{
			Name:   "MessageEntityType",
			Values: []string{"mention", "hashtag", "cashtag", "bot_command", "url", "email", "phone_number", "bold", "italic", "underline", "strikethrough", "code", "pre", "text_link", "text_mention", "spoiler", "custom_emoji"},
		},
		{
			Name:   "ParseMode",
			Values: []string{"Markdown", "MarkdownV2", "HTML"},
		},
	}
	typeFieldEnumsMap = map[string]map[string]string{
		"Chat": {
			"type": "ChatType",
		},
		"ChatFullInfo": {
			"type": "ChatType",
		},
		"InlineQuery": {
			"chat_type": "ChatType",
		},
		"MessageEntity": {
			"type": "MessageEntityType",
		},
	}
	methodFieldEnumsMap = map[string]map[string]string{
		"sendMessage": {
			"parse_mode": "ParseMode",
		},
		"sendChatAction": {
			"action": "ChatAction",
		},
	}
)

// RetrieveInfo is equivalent to retrieve_info in Python
func RetrieveInfo() (*APIResponse, error) {
	url := botDocURL
	resp, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch URL: %w", err)
	}
	defer resp.Body.Close()

	doc, err := goquery.NewDocumentFromReader(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("failed to parse HTML: %w", err)
	}

	devRules := doc.Find("div#dev_page_content")
	if devRules.Length() == 0 {
		return nil, fmt.Errorf("could not find dev_page_content")
	}

	// Initialize response
	items := &APIResponse{
		Methods: make([]*Method, 0, 100),
		Types:   make([]*Type, 0, 100),
		Enums:   defaultEnums,
	}

	// Get version and release date
	releaseTag := devRules.Find("h4").First()
	changelogAnchor := releaseTag.Find("a")
	items.Changelog = url + changelogAnchor.AttrOr("href", "")
	items.ReleaseDate = releaseTag.Text()
	items.Version = strings.TrimPrefix(devRules.ChildrenFiltered("p").First().Text(), "Bot API ")

	var currData BaseData

	devRules.Children().Each(func(i int, s *goquery.Selection) {
		switch goquery.NodeName(s) {
		case "h3", "hr":
			currData = nil

		case "h4":
			anchor := s.Find("a")
			name, exists := anchor.Attr("name")
			if exists && strings.Contains(name, "-") {
				currData = nil
				return
			}
			currData = getTypeAndName(s, anchor, url)
			if currData.GetBase().category == CategoryType {
				items.Types = append(items.Types, currData.(*Type))
			} else {
				items.Methods = append(items.Methods, currData.(*Method))
			}
		case "p":
			if currData == nil {
				return
			}
			desc := cleanTGDescription(s, url)
			currData.GetBase().Description = append(currData.GetBase().Description, desc...)
		case "table":
			if currData == nil {
				return
			}
			getFields(currData, s, url)
		case "ul":
			if currData == nil {
				return
			}
			getSubtypes(currData, s, url)
		}

		// Check method return types
		if currData != nil && currData.GetBase().category == CategoryMethod && len(currData.GetBase().Description) > 0 {
			if method, ok := currData.(*Method); ok {
				getMethodReturnType(method)
			}
		}
	})
	fixEnumsType(items)
	return items, nil
}

func getTypeAndName(t *goquery.Selection, anchor *goquery.Selection, url string) BaseData {
	currName := strings.TrimSpace(t.Text())
	base := Base{Name: currName}
	if href, exists := anchor.Attr("href"); exists {
		base.Href = url + href
	}
	if currName[0] >= 'A' && currName[0] <= 'Z' {
		base.category = CategoryType
		return &Type{Base: base}
	} else {
		base.category = CategoryMethod
		return &Method{Base: base}
	}
}

func getSubtypes(currData BaseData, s *goquery.Selection, url string) {
	if currData.GetBase().Name == "InputFile" {
		return
	}

	var listContents []string
	s.Find("li").Each(func(_ int, li *goquery.Selection) {
		listContents = append(listContents, cleanTGDescription(li, url)...)
	})

	if currData.GetBase().category == CategoryType {
		currData.(*Type).Subtypes = listContents
	}

	// Add formatted list items to description
	formattedList := make([]string, len(listContents))
	for i, content := range listContents {
		formattedList[i] = "- " + content
	}
	currData.GetBase().Description = append(currData.GetBase().Description, formattedList...)
}

func cleanTGDescription(t *goquery.Selection, url string) []string {
	// Replace emoji images
	t.Find("img").Each(func(_ int, s *goquery.Selection) {
		s.ReplaceWithHtml(s.AttrOr("alt", ""))
	})

	// Replace linebreaks
	t.Find("br").Each(func(_ int, s *goquery.Selection) {
		s.ReplaceWithHtml("\n")
	})

	// Handle anchors
	t.Find("a").Each(func(_ int, s *goquery.Selection) {
		anchorText := s.Text()
		if !strings.Contains(anchorText, "»") {
			return
		}

		link := s.AttrOr("href", "")
		if strings.HasPrefix(link, "#") {
			link = url + link
		} else if strings.HasPrefix(link, "/") {
			link = rootURL + link
		}

		s.ReplaceWithHtml(strings.Replace(anchorText, " »", ": "+link, 1))
	})

	text := t.Text()

	// Clean up whitespace
	wsRegex := regexp.MustCompile(`(\s){2,}`)
	text = wsRegex.ReplaceAllString(text, "$1")

	// Replace quotes
	text = strings.ReplaceAll(text, "”", "\"")
	text = strings.ReplaceAll(text, "“", "\"")

	// Replace ellipsis
	text = strings.ReplaceAll(text, "…", "...")

	// Replace dashes
	text = strings.ReplaceAll(text, "\u2013", "-")
	text = strings.ReplaceAll(text, "\u2014", "-")

	// Replace single quotes
	text = strings.ReplaceAll(text, "\u2019", "'")

	// Split and clean lines
	var result []string
	for _, line := range strings.Split(text, "\n") {
		if cleaned := strings.TrimSpace(line); cleaned != "" {
			result = append(result, cleaned)
		}
	}

	return result
}

func getFields(currData BaseData, s *goquery.Selection, url string) {
	body := s.Find("tbody")
	var fields []*Field

	body.Find("tr").Each(func(_ int, tr *goquery.Selection) {
		children := tr.Find("td")

		if currData.GetBase().category == CategoryType && children.Length() == 3 {
			desc := cleanTGFieldDescription(children.Eq(2), url)
			fields = append(fields, &Field{
				Name:        children.Eq(0).Text(),
				Types:       cleanTGType(children.Eq(1).Text()),
				Required:    !strings.HasPrefix(desc, "Optional. "),
				Description: desc,
			})
		} else if currData.GetBase().category == CategoryMethod && children.Length() == 4 {
			fields = append(fields, &Field{
				Name:        children.Eq(0).Text(),
				Types:       cleanTGType(children.Eq(1).Text()),
				Required:    children.Eq(2).Text() == "Yes",
				Description: cleanTGFieldDescription(children.Eq(3), url),
			})
		} else {
			fmt.Printf("An unexpected state has occurred!\n")
			fmt.Printf("Type: %s\n", currData.GetBase().category)
			fmt.Printf("Name: %s\n", currData.GetBase().Name)
			fmt.Printf("Number of children: %d\n", children.Length())
			os.Exit(1)
		}
	})
	for _, field := range fields {
		extractConstValue(field)
	}
	currData.GetBase().Fields = fields
}

func getMethodReturnType(method *Method) {
	description := strings.Join(method.Description, "\n")

	retSearchPatterns := []string{
		`.*(?:on success,)([^.]*)`,
		`.*(?:returns)([^.]*)(?:on success)?`,
		`.*([^.]*)(?:is returned)`,
	}

	for _, pattern := range retSearchPatterns {
		re := regexp.MustCompile(`(?i)` + pattern)
		if matches := re.FindStringSubmatch(description); matches != nil {
			extractReturnType(method, strings.TrimSpace(matches[1]))
			return
		}
	}

	fmt.Printf("WARN - failed to get return type for %s\n", method.Name)
}

func extractConstValue(field *Field) {
	constRe := regexp.MustCompile(`always "([\w_]+)"`)
	if matches := constRe.FindStringSubmatch(field.Description); matches != nil {
		field.Const = matches[1]
	}
}

func extractReturnType(method *Method, retStr string) {
	arrayRe := regexp.MustCompile(`(?i)(?:array of )+(\w*)`)
	if matches := arrayRe.FindStringSubmatch(retStr); matches != nil {
		ret := cleanTGType(matches[1])
		rets := make([]string, len(ret))
		for i, r := range ret {
			rets[i] = "Array of " + r
		}
		method.Returns = rets
	} else {
		words := strings.Fields(retStr)
		var rets []string
		for _, word := range words {
			// Remove punctuation
			word = strings.Map(func(r rune) rune {
				if strings.ContainsRune(string([]rune{'!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'}), r) {
					return -1
				}
				return r
			}, word)

			if word != "" && unicode.IsUpper([]rune(word)[0]) {
				rets = append(rets, cleanTGType(word)...)
			}
		}
		method.Returns = rets
	}
}

func cleanTGFieldDescription(t *goquery.Selection, url string) string {
	return strings.Join(cleanTGDescription(t, url), " ")
}

func getProperType(t string) string {
	switch t {
	case "Messages": // Avoids https://core.telegram.org/bots/api#sendmediagroup
		return "Message"
	case "Float number":
		return "Float"
	case "Int":
		return "Integer"
	case "True", "Bool":
		return "Boolean"
	default:
		return t
	}
}

func cleanTGType(t string) []string {
	pref := ""
	if strings.HasPrefix(t, "Array of ") {
		pref = "Array of "
		t = t[len("Array of "):]
	}

	// Fix situations like "A or B"
	fixedOrs := strings.Split(t, " or ")
	var fixedAnds []string
	// Fix situations like "A and B"
	for _, fo := range fixedOrs {
		parts := strings.Split(strings.TrimSpace(fo), " and ")
		fixedAnds = append(fixedAnds, parts...)
	}

	var fixedCommas []string
	// Fix situations like "A, B"
	for _, fa := range fixedAnds {
		parts := strings.Split(strings.TrimSpace(fa), ", ")
		fixedCommas = append(fixedCommas, parts...)
	}

	result := make([]string, len(fixedCommas))
	for i, x := range fixedCommas {
		result[i] = pref + getProperType(strings.TrimSpace(x))
	}
	return result
}

func fixEnumsType(resp *APIResponse) {
	for _, method := range resp.Methods {
		if enums, ok := methodFieldEnumsMap[method.Name]; ok {
			for _, field := range method.Fields {
				if enum, exist := enums[field.Name]; exist {
					field.Types = []string{enum}
				}
			}
		}
	}
	for _, t := range resp.Types {
		if enums, ok := typeFieldEnumsMap[t.Name]; ok {
			for _, field := range t.Fields {
				if enum, exist := enums[field.Name]; exist {
					field.Types = []string{enum}
				}
			}
		}
	}
}
