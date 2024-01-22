/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 I principali datatype in Javascript sono 5 (detti anche primitivi):

 -Stringa (sequenza di caratteri o di singolo carattere delimitata da doppi e singoli apici o backtick) es. "Francesco" 
 -number (valori numerici, non c'è distinzione tra intero e decimale e se quest'ultimo non è specificato viene trattato come intero. Il decimale viene espresso col .) es. 100, 0, 54.10
 -boolean (questo tipo di dato prevede solo due valori, TRUE oppure FALSE, tipico di controlli condizionali) es. let italian = true     let spanish = false
 -undefined (indica una variabile non inizializzata, a cui non si è dato alcun valore) es. let dog
 -null (rappresenta un tipo di dato a cui non è stato assegnato intenzionalmente un valore) es. let yourAge = null
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = "Francesco";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 12;
let num2 = 20;

console.log("Somma =", num1 + num2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName = "Gentile";

/* const lettera = A;
  const lettera = B; (In questo caso il programma darà errore in quanto abbiamo già precedentemente assegnato il valore A alla costante chiamata lettera e quindi non sarà possibile modificarlo. Se volessimo assegnare un valore diverso, dovremmo utilizzare la keyword let anzichè const)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log("Sottrazione", 4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

console.log(name1 === name2); /*False*/

name2 = name2.toLowerCase();
console.log(name1 === name2); /*True*/
