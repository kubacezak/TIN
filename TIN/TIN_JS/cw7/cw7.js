// a)	Napisz funkcję JS walidującą zawartość formularza – formularz powinien mieć przynajmniej jedno obowiązkowe pole numeryczne i jedno pole, które po prostu nie może być puste. W razie nie przejścia walidacji przez pole wyświetl odpowiednie informacje by poinformować użytkownika. Jeśli walidacja jest nieudana, funkcja powinna zwracać false, w przeciwnym wypadku true

function walidujFormularz() {
	let poleNumeryczne = document.getElementById('Wiek')
	let poleTekstowe = document.getElementById('Imie')

	if (Wiek.value === '' || isNaN(Wiek.value)) {
		alert('Pole wiek jest wymagane i musi być liczbą.')
		return false
	}

	if (Imie.value === '') {
		alert('Pole imię nie może być puste.')
		return false
	} else {
		alert('Imię: ' + Imie.value + ' | ' + ' Wiek: ' + Wiek.value)
		return true
	}
}
// b)	Napisz funkcję JS dodającą akapit tekstu do strony po wciśnięciu odpowiedniego przycisku. Tekst nowego akapitu powinien zostać pobrany z elementu input znajdującego się na stronie.

function dodajAkapit() {
	let tekst = document.getElementById('tekstInput').value
	let kontener = document.getElementById('kontener')
	let nowyAkapit = document.createElement('p')
	nowyAkapit.textContent = tekst
	kontener.appendChild(nowyAkapit)
}
function usun() {
    let kontener = document.getElementById('kontener');
    kontener.innerHTML = '';
}