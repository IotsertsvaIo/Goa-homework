class Animal:
    def __init__(self, name):
        self.name = name

    def sound(self):
        return "This animal makes a sound."

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

    def sound(self):
        return "Woof!"

class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name)
        self.color = color

    def sound(self):
        return "Meow!"

class Bird(Animal):
    def __init__(self, name, species):
        super().__init__(name)
        self.species = species

    def sound(self):
        return "Chirp!"

class Fish(Animal):
    def __init__(self, name, water_type):
        super().__init__(name)
        self.water_type = water_type

    def sound(self):
        return "Blub!"

class Lion(Animal):
    def __init__(self, name, habitat):
        super().__init__(name)
        self.habitat = habitat

    def sound(self):
        return "Roar!"

class Elephant(Animal):
    def __init__(self, name, size):
        super().__init__(name)
        self.size = size

    def sound(self):
        return "Trumpet!"

class Snake(Animal):
    def __init__(self, name, length):
        super().__init__(name)
        self.length = length

    def sound(self):
        return "Hiss!"
