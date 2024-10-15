class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    get info() {
      return `${this.name} is ${this.age} years old.`;
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, breed) {
      super(name, age);
      this.breed = breed;
    }
  
    bark() {
      return `${this.name} barks!`;
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, color) {
      super(name, age);
      this.color = color;
    }
  
    meow() {
      return `${this.name} meows!`;
    }
  }
  
  class Bird extends Animal {
    constructor(name, age, species) {
      super(name, age);
      this.species = species;
    }
  
    chirp() {
      return `${this.name} chirps!`;
    }
  }
  
  class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    get info() {
      return `${this.year} ${this.brand} ${this.model}`;
    }
  
    start() {
      return `The ${this.brand} ${this.model} starts!`;
    }
  }
  
  const dog = new Dog("Buddy", 3, "Golden Retriever");
  const cat = new Cat("Whiskers", 2, "Tabby");
  const bird = new Bird("Tweety", 1, "Canary");
  const car = new Car("Toyota", "Corolla", 2020);
  
  console.log(dog.info);
  console.log(dog.bark());
  console.log(cat.info);
  console.log(cat.meow());
  console.log(bird.info);
  console.log(bird.chirp());
  console.log(car.info);
  console.log(car.start());
  