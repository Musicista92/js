/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
1. Number: è un tipo di dato che rappresenta i numeri. Può essere usato per fare operazioni matematiche, come somma(+), moltiplicazione(*), divisionw (/) , ecc. 
2. String: è un tipo di dato che rappresenta il testo. Si può mettere  tra virgolette o doppi apici. Es: "Ciao a tutti"- 'ciao a tutti'.
3. Boolean rappresenta una scelta: vero (true) o falso (false). es: 17<18 ( true)
4. Undefined è un contenitore a cui non è stata assegnata ancora alcuna variabile.
5. Null è un contenitore a cui si è deciso di non dare alcuna assegnazione, come se ad una pentole mettessimo un coperchio sopra.
6. Object: è come un contenitore con tante proprietà, come una borsa piena di oggetti.
7. Array: è una lista di elementi, come una lista della spesa.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* 
Un oggetto in JavaScript è come una scatola organizzata che può contenere tante cose diverse e a cui si assegnano nomi specifici.
*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un'addizione (una somma) dei numeri 12 e 20.
*/
let addizione
addizione= 12 + 20
console.log(addizione)

/* ESERCIZIO 4
 Crea una variabile di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log("il valore di x è uguale a:" + x)

/* ESERCIZIO 5
 Crea una variabile chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Daniele"
console.log("Il nome è  di name è " + name)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variabile "x" appena dichiarata (che contiene il numero 12).
*/
let differenza = 4-x

console.log("Sottrazione:" + differenza)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"
let name2 = "John"

console.log("name1 diverso da name2:" + name1 !== name2)
