package spec

import (
	"encoding/json"
	"github.com/TBXark/telegram-bot-api-types/internal/scrape"
	"os"
	"path/filepath"
)

func RenderSpec(resp *scrape.APIResponse, dir string) error {
	latestPath := filepath.Join(dir, "spec", "latest.json")
	versionPath := filepath.Join(dir, "spec", resp.Version+".json")

	latest, err := os.Create(latestPath)
	if err != nil {
		return err
	}

	version, err := os.Create(versionPath)
	if err != nil {
		return err
	}

	bytes, err := json.MarshalIndent(resp, "", "  ")
	if err != nil {
		return err
	}

	_, err = latest.Write(bytes)
	if err != nil {
		return err
	}

	_, err = version.Write(bytes)
	if err != nil {
		return err
	}

	return nil
}
