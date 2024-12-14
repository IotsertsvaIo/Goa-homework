function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function countOddDigits(num) {
    let count = 0;
    for (let digit of String(Math.abs(num))) {
        if (parseInt(digit) % 2 !== 0) {
            count++;
        }
    }
    return count;
}

function countNumbers(n, numbers) {
    let count = 0;
    let matchingNumbers = [];
    for (let num of numbers) {
        if ((num < 100 && num % 3 === 0 && num % 6 !== 0) || 
            (num < 100 && num % 5 === 0 && num % 10 !== 0)) {
            count++;
            matchingNumbers.push(num);
        }
    }
    return { count, matchingNumbers };
}

function countLeftDuplicates(n, symbols) {
    let counts = [];
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < i; j++) {
            if (symbols[j] === symbols[i]) {
                count++;
            }
        }
        counts.push(count);
    }
    return counts;
}

let sortedArray = bubbleSort([64, 34, 25, 12, 22, 11, 90]);
console.log("Sorted Array:", sortedArray);

let oddCount = countOddDigits(123456);
console.log("Odd Digits Count:", oddCount);

let numbers = [15, 45, 60, 99, 5, 25];
let countData = countNumbers(numbers.length, numbers);
console.log("Count of Numbers:", countData.count);
console.log("Matching Numbers:", countData.matchingNumbers);

let symbols = ['a', 'b', 'a', 'c', 'a', 'b'];
let leftDuplicates = countLeftDuplicates(symbols.length, symbols);
console.log("Left Duplicates Count for Each Symbol:", leftDuplicates);
