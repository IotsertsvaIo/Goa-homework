//             1

const numbers = [1, 2, 3, 4, 5];

myForEach(numbers, (num) => {
    console.log(num);
});

//             2

const nums = [1, 2, 3, 4, 5];
const newNumbers = [];

myForEach(nums, (num) => {
    newNumbers.push(num + 1);
});

console.log(newNumbers);

//             3

const fruits = ['apple', 'banana', 'cherry'];

myForEach(fruits, (fruit, index) => {
    console.log(`${index}: ${fruit}`);
});