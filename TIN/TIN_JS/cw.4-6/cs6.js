// Ćwiczenia #6 Wstęp do JavaScript
// Stwórz obiekt przy pomocy konstruktora Object, przypisz do niego własności opisujące Ciebie (imię, nazwisko, nr indeksu)
let s25446 = new Object()
s25446.firstName = 'Jakub'
s25446.lastName = 'Cezak'
s25446.indexNumber = 's25446'
// Stwórz obiekt przy pomocy object initializer, przypisz do niego własności opisujące Ciebie (imię, nazwisko, nr indeksu)
let s25446_2 = {
	firstName: 'Jakub',
	lastName: 'Cezak',
	indexNumber: 's25446',
}
// Stwórz obiekt przy pomocy object initializer, przypisz do niego własności opisujące Ciebie (imię, nazwisko, nr indeksu, tablica z ocenami). Przypisz do obiektu metodę liczącą średnią ocen
let s25446 = new Object()
s25446.firstName = 'Jakub'
s25446.lastName = 'Cezak'
s25446.indexNumber = 's25446'
s25446.grades = [5, 4, 3, 4, 5]
s25446.average = function () {
	let sum = 0
	for (let i = 0; i < this.grades.length; i++) {
		sum += this.grades[i]
	}
	return sum / this.grades.length
}
console.log('Srednia dla s25446 to', s25446.average())
// Napisz funkcje konstruktora, tworzącą obiekty reprezentujące studentów – mają zawierać imię, nazwisko, nr indeksu, tablicę z ocenami i metodę wypisującą imię, nazwisko i średnią ocen. Stwórz przy jej pomocy  obiekt reprezentujący siebie.

function Student(firstName, lastName, indexNumber, grades) {
	this.firstName = firstName
	this.lastName = lastName
	this.indexNumber = indexNumber
	this.grades = grades

	this.printDetailsAndAverage = function () {
		let sum = this.grades.reduce((a, b) => a + b, 0)
		let average = sum / this.grades.length
		console.log('Średnia dla', this.firstName, this.lastName, 'to', average)
	}
}

let me = new Student('Jakub', 'Cezak', 's25446', [2, 4, 6, 8, 10])
me.printDetailsAndAverage()
