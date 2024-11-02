class Animal:
    def __init__(self, name):
        self.name = name

class Mammal(Animal):
    def __init__(self, name, has_hair):
        super().__init__(name)
        self.has_hair = has_hair

class Dog(Mammal):
    def __init__(self, name, has_hair, breed):
        super().__init__(name, has_hair)
        self.breed = breed
