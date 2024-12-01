// 1

let ch = prompt("Enter a character:").toLowerCase();
if ("aeiou".includes(ch)) {
    console.log("The character is a vowel.");
} else {
    console.log("The character is a consonant.");
}

// 2

let numbers = [];
for (let i = 0; i < 4; i++) {
    numbers.push(parseInt(prompt("Enter a number:")));
}
let maxProduct = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        let product = numbers[i] * numbers[j];
        if (product > maxProduct) {
            maxProduct = product;
        }
    }
}
console.log(maxProduct);