async function delayedMessage() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Hello after 2 seconds!");
}
delayedMessage();

async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
}
fetchData();

async function addNumbers(a, b) {
    return new Promise(resolve => setTimeout(() => resolve(a + b), 1000));
}
async function calculateSum() {
    let sum = await addNumbers(5, 7);
    console.log("Sum:", sum);
}
calculateSum();


async function isEven(num) {
    return new Promise(resolve => setTimeout(() => resolve(num % 2 === 0), 500));
}
async function checkNumber() {
    let result = await isEven(8);
    console.log("Is number even?", result);
}
checkNumber();


async function countdown(seconds) {
    for (let i = seconds; i > 0; i--) {
        console.log(i);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    console.log("Time's up!");
}
countdown(5);



class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let person1 = new Person("Alice", 25);
person1.greet();


class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    accelerate(amount) {
        this.speed += amount;
        console.log(`${this.brand} is now going at ${this.speed} km/h`);
    }
}
let car1 = new Car("Tesla", 60);
car1.accelerate(20);

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`${this.owner} deposited ${amount}. New balance: ${this.balance}`);
    }
}
let account = new BankAccount("John", 500);
account.deposit(200);


class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}
let dog = new Animal("Dog", "Woof");
dog.makeSound();


class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    getGrade() {
        console.log(`${this.name} has a grade of ${this.grade}`);
    }
}
let student1 = new Student("Mike", "A");
student1.getGrade();
