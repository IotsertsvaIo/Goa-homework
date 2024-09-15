function manualSlice(array, start, end) {
    let result = [];
    for (let i = start; i < end; i++) {
        result.push(array[i]); 
    }
    return result;
}

let numbers = [10, 20, 30, 40, 50];
console.log(manualSlice(numbers, 1, 4));