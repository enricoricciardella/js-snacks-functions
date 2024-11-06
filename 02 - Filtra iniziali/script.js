/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
/**
 * Description placeholder
 *
 * @param {*} array
 * @param {*} lettera
 * @returns {{}}
 */

function filtroIniziale(array, lettera) {
    const result = []; // Array delle iniziali
    for (let i = 0; i < names.length; i++) {
        if(array[i][0] === lettera){
            result.push(array[i])
        }
    }
    return result;
}
// Invoca la funzione qui e stampa il risultato in console
const filtroNomi = filtroIniziale(names, "A");
console.log(filtroNomi);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]