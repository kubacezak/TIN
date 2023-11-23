// Ćwiczenia #5 Wstęp do JavaScript

// Ćwiczenie A

// Zaimplementuj poniższe funkcje – jedna funkcja/obiekt + przykład wykorzystania na plik, pliki nazwij 5a.js 5b.js itd. Użyj console.log do wypisywania wyników działania funkcji

// Funkcja licząca silnię zadanej liczby
function oblicz_silnia(num) {
	if (num === 0 || num === 1) {
		return 1
	} else {
		return num * oblicz_silnia(num - 1)
	}
	
}

function print_silnia(num) {
	const result = oblicz_silnia(num)
	return `Silnia z ${num} to ${result}`
}

console.log(print_silnia(12))

// Funkcja przyjmująca tablicę liczb i znajdująca największą wartość
function findMax(numbers) {
	let max = numbers[0]
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] > max) {
			max = numbers[i]
		}
	}
	return max
}
const numbers = [10, 20, 30, 40, 50]
const max = findMax(numbers)
console.log(`Największa wartość to ${max}`)

// Funkcja przyjmująca tablicę liczb i znajdująca drugą największą wartość

function find_second_max(numbers) {
	let max = numbers[0]
	let secondMax = numbers[0]
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] > max) {
			secondMax = max
			max = numbers[i]
		} else if (numbers[i] > secondMax && numbers[i] !== max) {
			secondMax = numbers[i]
		}
	}
	return secondMax
}

const numbers2 = [10, 20, 30, 40, 50]
const secondMax = find_second_max(numbers2)
console.log(`Druga największa wartość to ${secondMax}`)
// Funkcja przyjmująca trzy liczby i sprawdzająca, czy pierwsza liczba znajduje się w zakresie pomiędzy drugą a trzecią

function isInRange(num, min, max) {
	return num >= min && num <= max
}
console.log(isInRange(2, 4, 6))

// Funkcja przyjmująca liczbę i zwracająca różne napisy w zależności od tego, czy liczba jest parzysta czy nieparzysta
function isEven(num) {
	if (num % 2 === 0) {
		console.log('parzysta')
	} else {
		console.log('nieparzysta')
	}
}
isEven(47)
