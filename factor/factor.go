package main

import (
	"os"
	"strconv"
	"fmt"
)

func main() {
	if len(os.Args) == 1 {
		return
	}
	iStr := os.Args[1]
	i, _ := strconv.Atoi(iStr)
	for j := 1; j < i; j++ {
		if i % j == 0 {
			fmt.Printf("%d ", j)
		}
	}
}
