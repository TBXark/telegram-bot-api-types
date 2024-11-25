package main

import (
	"io"
	"log"
	"os"
	"os/exec"
	"path/filepath"
)

func main() {
	err := runPub("./dist/dts")
	if err != nil {
		log.Fatalf("Failed to publish dts: %v", err)
	}
	err = runPub("./dist/jsdoc")
	if err != nil {
		log.Fatalf("Failed to publish jsdoc: %v", err)
	}
}

func runPub(dir string) error {
	err := CopyFile("./README.md", filepath.Join(dir, "README.md"))
	if err != nil {
		return err
	}
	err = CopyFile("./LICENSE", filepath.Join(dir, "LICENSE"))
	if err != nil {
		return err
	}
	cmd := exec.Command("npm", "publish")
	cmd.Dir = dir
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	cmd.Stdin = os.Stdin
	err = cmd.Run()
	if err != nil {
		log.Fatalf("Failed to publish: %v", err)
	}
	return nil
}

func CopyFile(src, dst string) error {
	sourceFile, err := os.Open(src)
	if err != nil {
		return err
	}
	defer sourceFile.Close()
	destinationFile, err := os.Create(dst)
	if err != nil {
		return err
	}
	defer destinationFile.Close()
	_, err = io.Copy(destinationFile, sourceFile)
	return err
}
