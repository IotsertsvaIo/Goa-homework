// 1
const countries = new Map();
countries.set("Georgia", "Tbilisi");
countries.set("France", "Paris");
countries.set("USA", "Washington");
countries.forEach((capital, country) => console.log(`${country}: ${capital}`));

// 2
const cities = new Map();
cities.set("Tbilisi", "Georgia");
cities.set("Paris", "France");
cities.set("London", "UK");
console.log(cities.has("Tbilisi"));

// 3
const students = new Map();
students.set("Alice", 90);
students.set("Bob", 85);
students.set("Charlie", 88);
console.log(students.get("Bob"));

// 4
const keys = new Map();
keys.set("Key1", "Value1");
keys.set("Key2", "Value2");
keys.set("Key3", "Value3");
keys.forEach((_, key) => console.log(key));

// 5
const items = new Map();
items.set("City", "Tbilisi");
items.set("Country", "Georgia");
items.delete("City");
console.log(items);

// 6
const sizes = new Map();
sizes.set("Apple", "Fruit");
sizes.set("Carrot", "Vegetable");
console.log(sizes.size);

// 7
const updates = new Map();
updates.set("Language", "English");
updates.set("Level", "Intermediate");
updates.set("Level", "Advanced");
console.log(updates);

// 8
const emptyMap = new Map();
console.log(emptyMap.size === 0);

// 9
const product = { name: "Laptop", price: 1000 };
const productMap = new Map(Object.entries(product));
console.log(productMap);

// 10
const clearMap = new Map();
clearMap.set("A", 1);
clearMap.set("B", 2);
clearMap.clear();
console.log(clearMap.size === 0);

