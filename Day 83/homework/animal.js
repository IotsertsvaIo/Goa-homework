class Animal {
    constructor(name, habitat, diet) {
        this.name = name;
        this.habitat = habitat;
        this.diet = diet;
    }

    getInfo() {
        return `სახელი: ${this.name}\nჰაბიტატი: ${this.habitat}\nკვება: ${this.diet}`;
    }
}

class Mammal extends Animal {
    constructor(name, habitat, diet, furType) {
        super(name, habitat, diet);
        this.furType = furType;
    }

    getInfo() {
        return `${super.getInfo()}\nბეწვის ტიპი: ${this.furType}`;
    }
}

class Bird extends Animal {
    constructor(name, habitat, diet, wingSpan) {
        super(name, habitat, diet);
        this.wingSpan = wingSpan;
    }

    getInfo() {
        return `${super.getInfo()}\nფრთების სიგანე: ${this.wingSpan} მ`;
    }
}

class Reptile extends Animal {
    constructor(name, habitat, diet, isVenomous) {
        super(name, habitat, diet);
        this.isVenomous = isVenomous;
    }

    getInfo() {
        return `${super.getInfo()}\nმოიწამლულია: ${this.isVenomous ? "კი" : "არა"}`;
    }
}

const lion = new Mammal("ლომი", "სავანა", "მტაცებელი", "სქელი ბეწვი");
const eagle = new Bird("არწივი", "მთები", "ხორცისმჭამელი", 2.3);
const snake = new Reptile("გველი", "ტროპიკული ტყეები", "ხორცისმჭამელი", true);

console.log(lion.getInfo());
console.log(eagle.getInfo());
console.log(snake.getInfo());
