function manualReverse(array) {
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

let letters = ["a", "b", "c", "d"];
console.log(manualReverse(letters));