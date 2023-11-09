// Cwiczenie A
{
	console.log('Hello World')
}

// Cwiczenie B
// Zaimplementuj poniższe funkcje – jedna funkcja/obiekt + przykład wykorzystania na plik, pliki nazwij 2a.js 2b.js itd. Użyj console.log do wypisywania:
// a)	Prezentacja działania pętli for i while (przykład dowolny)
{
for (i = 1; i <= 5; i++) {
		console.log(i)
	}
}
// b)	Prezentacja działania if

{
	const age = 22
	if (age >= 21) {
		console.log('You can legally drink in the united states of america.')
	}
}
// c)	Stworzenie tablicy z kilkoma elementami
{
	const myArray = [1, 2, 3, 4]
	console.log(myArray)
}
// d)	Funkcja przyjmująca tablicę jako parametr i wypisująca jej zawartość w kolejnych linijkach
{
	function printArray(array) {
		array.forEach(element => {
			console.log(element)
		})
	}
	const myArray = [1, 2, 3, 4]
	printArray(myArray)
}
