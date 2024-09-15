function manualIndexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

let fruits = ["apple", "banana", "cherry"];
console.log(manualIndexOf(fruits, "banana"));
console.log(manualIndexOf(fruits, "grape"));