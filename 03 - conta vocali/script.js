/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
/**
 * Description placeholder
 *
 * @param {*} stringa
 * @returns {number}
 */

function contaVocali(stringa) {
    const vocali = ['a', 'e', 'i', 'o', 'u'];
    let conteggio = 0;
    // Ciclo for per contare le vocali
    for (let i = 0; i < stringa.length; i++) {
        if (vocali.includes(stringa[i].toLowerCase())) {
            conteggio++;
        }
    }
    return conteggio; 
}

// Invoca la funzione qui e stampa il risultato in console

const vocali = contaVocali(word); 
console.log(vocali);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)