function sumDigits(n) {
    let result = 0;
    n = Math.abs(n);
    while (n > 0) {
        result += n % 10;
        n = Math.floor(n / 10);
    }
    return result;
}

console.log(sumDigits(123));
console.log(sumDigits(405));
console.log(sumDigits(-321));



function sumTwoLargest(arr) {
    if (arr.length < 2) return null;
    let max1 = Math.max(...arr);
    arr.splice(arr.indexOf(max1), 1);
    let max2 = Math.max(...arr);
    return max1 + max2;
}

console.log(sumTwoLargest([3, 7, 2, 9, 5]));
console.log(sumTwoLargest([10, 10, 5, 3]));
