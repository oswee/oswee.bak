package session

import "fmt"

type Session struct {
	Key   string
	Value string
}

func (s *Session) Set(k string) {
	s.Key = k
	fmt.Println("Hello", s.Key)
}
