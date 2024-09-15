// task 1

let person = {
    name: "John",
    age: 25,
    city: "New York"
  };

// task 2

let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
  };

    console.log(car.make);
    console.log(car.model); 
    console.log(car.year);

// task 3

person.age = 30;
console.log(person.age);

//task 4

person.hobby = "reading";
console.log(person.hobby);

// task 5 

delete person.city;
console.log(person.city);

//task 6

let calculator = {
    a: 10,
    b: 5,
    add: function() {
      return this.a + this.b;
    }
  };
  
    console.log(calculator.add());


// task 7

let book1 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180
  };
  
let book2 = {
    title: "1984",
    author: "George Orwell",
    pages: 328
  };
  
let book3 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281
  };

// task 8 

function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
    this.makeSound = function() {
      console.log(this.sound);
    };
  }

// task9

let cat = new Animal("Cat", "Meow");
let dog = new Animal("Dog", "Bark");

cat.makeSound(); 
dog.makeSound();

// task 10

Animal.prototype.changeName = function(newName) {
    this.name = newName;
  };
  
cat.changeName("Kitty");
console.log(cat.name);
