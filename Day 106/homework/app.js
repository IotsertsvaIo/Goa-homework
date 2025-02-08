import { reverseString, greeting } from './string.mjs';
import { add, multiply, pi } from './math.mjs';
import { getRandomNumber, randomMessage } from './random.mjs';
import { Person, defaultPerson } from './class.mjs';
import { findMax, findMin, sampleArray } from './arr.mjs';

console.log(greeting);
console.log(reverseString("JavaScript"));

console.log(`Add: ${add(5, 10)}`);
console.log(`Multiply: ${multiply(3, 7)}`);
console.log(`Pi: ${pi}`);

console.log(randomMessage);
console.log(`Random Number: ${getRandomNumber(1, 100)}`);

console.log(defaultPerson.introduce());
const newPerson = new Person("Ioane", 13);
console.log(newPerson.introduce());

console.log(`Max in Array: ${findMax(sampleArray)}`);
console.log(`Min in Array: ${findMin(sampleArray)}`);
