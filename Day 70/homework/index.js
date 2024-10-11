// 1.
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));

// 2. 
let sum = 0;
numbers.forEach(num => sum += num);
console.log(sum);

// 3. 
const students = ['Alice', 'Bob', 'Charlie'];
students.forEach(name => console.log(`Student Name: ${name}`));

// 4.
const integers = [1, 2, 3, 4];
const doubled = [];
integers.forEach(num => doubled.push(num * 2));
console.log(doubled);

// 
const squares = integers.map(num => num * num);
console.log(squares);

// 6
const strings = ['hello', 'world', 'JavaScript'];
const lengths = strings.map(str => str.length);
console.log(lengths);

// 7. 
const lowercaseStrings = ['apple', 'banana', 'cherry'];
const uppercaseStrings = lowercaseStrings.map(str => str.toUpperCase());
console.log(uppercaseStrings);

// 8. 
const mixedNumbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = mixedNumbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 9. 
const names = ['John', 'Catherine', 'Michael', 'Sam'];
const longNames = names.filter(name => name.length > 5);
console.log(longNames);

// 10. 
const numArray = [-10, -5, 0, 5, 10];
const positiveNumbers = numArray.filter(num => num > 0);
console.log(positiveNumbers);
