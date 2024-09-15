let numbers = [];
for (let i = 0; i <= 100; i++) {
    numbers.push(i);
}

let evenSum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) { 
        evenSum += numbers[i]; 
    }
}

console.log("ლუწი რიცხვების ჯამი: " + evenSum);