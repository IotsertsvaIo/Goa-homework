const objectsArray = [
    { name: "Ioane", age: 13, hobby: "football" },
    { name: "Zaza", age: 16, hobby: "programming" },
    { name: "Jargji", age: 13, hobby: "gaming" }
];

for (const obj of objectsArray) {
    for (const key in obj) {
        console.log(obj[key]);
    }
}
