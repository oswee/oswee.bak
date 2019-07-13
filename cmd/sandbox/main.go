package main

import "fmt"

type triangle struct {
	x float64
	y float64
}

type square struct {
	x float64
}

type rectangle struct {
	x float64
	y float64
}

func (t triangle) Area() float64 {
	return (t.x * t.y) / 2
}

func (s square) Area() float64 {
	return s.x * s.x
}

func (r rectangle) Area() float64 {
	return r.x * r.y
}

type Shape interface {
	Area() float64
}

func Print(s Shape) {
	fmt.Println(s)
}

func main() {
	// var s Shape
	s := &square{
		2,
	}
	t := &triangle{
		4,
		3,
	}

	fmt.Println(s.Area())
	fmt.Println(t.Area())
	print(s)
}
