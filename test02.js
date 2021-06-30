let arrInt = [104, 101, 108, 108, 1];                     //dichiaro i miei array di riferimento
let arrChar = ['h','e','l','l','o'];

let arrInt2 = [99, 8364, 97, 111];
let arrChar2 = ['c','€','€','o'];

function check(arr1,arr2){                                  // definisco la funzione 
    let arrCheck=[]                                         // definisco un array vuoto 
    arr1.forEach(el => {                                    // faccio partire un ciclo for trammite forEach
        let x=String.fromCharCode(el);                      // definisco una variabile dove converto il valore numerico che corrisponde all ASCII del mio carattere
        arrCheck.push(x);                                   // popolo il mio array con le variabili del ciclo for
    });
    console.log(arrCheck)                                   // console log per controllo
    console.log(arr2)
    if(arrCheck.length != arr2.length)   {                  // ciclo if per controllare ceh la lunghezza degli array coincide , in modo tale da risparmiare calcoli in caso di diversità
        return false                                        // se non coincidono restituisco il valore bolleano False
    }else{
        for(let i=0; i<arrCheck.length; i++){               // se coincidono inizio un ciclo for dove confronto i valori singoli dei miei array
            if(arrCheck[i] != arr2[i]){
                console.log(arrCheck[i]+" valore ASCII "+arr1[i]+" è diverso da "+arr2[i]+" valore ASCII "+arr2[i].charCodeAt(0)) // messaggio in console nel caso in cui i valori non coincidono
                return false
            }
        }return true                                        // se anche la seconda verifica è andata buon fine restituisco True come result della mia funzione
    }
}
    /*
    if(JSON.stringify(arrCheck) === JSON.stringify(arr2)){   // sistema alternativo di controllo che ho commentato, in caso non volessi sapere il valore differente
        return true;                                         // contronta i valori stringificati del array creato come placeholder , e del array in caratteri
    }else{
        return false;
    }*/ 	

console.log(check(arrInt,arrChar))                            // restituisco intera funzione in console log per avere un valore leggibile in essa, passando come argomento la coppia di array da me 
