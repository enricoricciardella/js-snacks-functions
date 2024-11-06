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

    // Ciclo per contare le vocali
    for (let i = 0; i < stringa.length; i++) {
        if (vocali.includes(stringa[i].toLowerCase())) {
            conteggio++;
            // Incrementa il conteggio se il carattere è una vocale
        }
    }
    return conteggio; // Ritorna il conteggio delle vocali
}

// Invoca la funzione qui e stampa il risultato in console
const vocali = contaVocali(word); // Usa 'word' come parametro
console.log(vocali); // Stampa il risultato (3)



//Risultato atteso se si passa 'javascript': 3 (a, a, i)