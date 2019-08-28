package main

func main() {

	count := 10

	println("Before:", count, &count)
	increment(&count)
	println("After:", count, &count)
}

func increment(n *int) {
	*n++
	println("Inc:", *n, &n, n)
}
