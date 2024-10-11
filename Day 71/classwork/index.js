//            1

const me = [1, 2];

[me[0], me[1]] = [me[1], me[0]];

console.log(me)

//            2

const person = { name: 'Alice', age: 25, city: 'New York' };

const {name, age} = person

console.log(person)

//            3

const nestedArray = [1, [2, 3, [4, 5]]];

const [num, [num1, num2, [num3]]] = nestedArray

console.log(num2)

//             4

const fruits = []

const [fruit = "banana"] = fruits

console.log(fruits)

//             5

const user = {id: 101, username: "john_doe"}

const {id: useId, username: userName} = user

console.log(useId, userName)