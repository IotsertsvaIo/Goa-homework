// 1

let array = [10, 20, 30, 40, 50];
console.log(array[2], array[4]);

// 2

let N = parseInt(prompt("Enter the number of elements:"));
let array2 = [];
for (let i = 0; i < N; i++) {
    array2.push(parseInt(prompt("Enter a number:")));
}
for (let i = 1; i < N; i += 2) {
    console.log(array2[i]);
}

// 3

let array3 = [];
for (let i = 0; i < 10; i++) {
    array3.push(parseInt(prompt("Enter a number:")));
}
for (let i = 0; i < 10; i++) {
    array3[i] *= 2;
    console.log(array3[i]);
}

// 4

let n = parseInt(prompt("Enter the number of elements:"));
let array4 = [];
for (let i = 0; i < n; i++) {
    array4.push(parseInt(prompt("Enter a number:")));
}
for (let i = n - 1; i >= 0; i--) {
    console.log(array4[i]);
}

// 5

let l = parseInt(prompt("Enter the number of elements:"));
let array5 = [];
for (let i = 0; i < l; i++) {
    array5.push(parseInt(prompt("Enter a number:")));
}
if (; > 1) {
    let temp = array5[0];
    array5[0] = array5[l - 1];
    array5[l - 1] = temp;
}
console.log(array5);
