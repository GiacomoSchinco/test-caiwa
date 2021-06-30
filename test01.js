var valori = [-10, -20, -30, -40, -12, -50, -2, -8]

function trovaMassimo(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    } return max
}
console.log(trovaMassimo(valori))