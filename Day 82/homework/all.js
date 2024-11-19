// 1

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 2, 9, 1, 5, 6]));

// 2

const number = parseInt(prompt("შეიტანეთ მთელი რიცხვი: "));
let oddCount = 0;
for (const digit of number.toString()) {
    if (parseInt(digit) % 2 !== 0) oddCount++;
}
console.log(oddCount);

// 3

const m = parseInt(prompt("შეიტანეთ რიცხვების რაოდენობა: "));
const numbers = [];
for (let i = 0; i < n; i++) {
    numbers.push(parseInt(prompt(`შეიტანეთ რიცხვი ${i + 1}:`)));
}
const result = numbers.filter(x => (x < 100 && ((x % 3 === 0 && x % 6 !== 0) || (x % 5 === 0 && x % 10 !== 0))));
console.log(result.length);
console.log(result);

// 4

const n = parseInt(prompt("შეიტანეთ სიმბოლოების რაოდენობა: "));
const chars = [];
for (let i = 0; i < n; i++) {
    chars.push(prompt(`შეიტანეთ სიმბოლო ${i + 1}:`));
}
const counts = chars.map((char, index) => chars.slice(0, index).filter(c => c === char).length);
console.log(counts);

