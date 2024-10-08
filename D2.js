/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

if (10 < 5) {
  console.log("5 è più grande");
} else console.log("10 è più grande") //10 è più grande

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

if (7 === 5) {
  console.log("equal");
} else console.log("not equal") // not equal

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

if (10 % 5 === 0) {
  console.log("divisibile per 5")
} else console.log("non divisibile per 5") //divisibile per 5

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const x = 5;
const y = 3;
if (x === 8 || y === 8 || x + y === 8 || x - y === 8 || y - x === 8) {
  console.log("uno dei valori è 8 oppure lo è la loro somma/sottrazione")
} else console.log("nessuno dei valori è 8 nemmeno la loro somma/sottrazione") //uno dei valori è 8 oppure lo è la loro somma/sottrazione

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 55
if (totalShoppingCart < 50) {
  console.log(totalShoppingCart + 10)
} else console.log(totalShoppingCart) //55

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

if (totalShoppingCart * 0.8 < 50) {
  console.log(totalShoppingCart *0.8 + 10)
} else console.log(totalShoppingCart)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let a = 12;
let b = 8;
let c = 27;
if (a > b && b > c) {
  console.log("l'ordine è: a b c")
} else if (a > c && c > b) {
  console.log("l'ordine è: a c b")
} else if (b > a && a > c) {
  console.log("l'ordine è: b a c")
} else if (b > c && c > a) {
  console.log("l'ordine è: b c a")
} else if (c > a && a > b) {
  console.log("l'ordine è: c a b")
} else console.log("l'ordine è: c b a") //l'ordine è: c a b

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const name = "Davide"
const age = 32
const drivingLicenceB = true

console.log(typeof name) //string
console.log(typeof age) //number
console.log(typeof drivingLicenceB) //boolean

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let num = 17
if (num % 2 === 0) {
  console.log("num è un numero pari")
} else console.log("num è un numero dispari") //num è un numero dispari

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
if (val >= 5 && val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore"); //meno di 10
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
console.log(me)
/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto"
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

numbers.splice (9, 1, 100)
console.log(numbers)