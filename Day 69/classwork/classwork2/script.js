let account = {
    firstName: 'Luka',
    lastName: 'Tskhvaradze',
    age: 13,
    email: 'luka@example.com',
    username: 'luka123'
};

for (let key in account) {
    console.log(key + ": " + account[key]);
}

let numbers = [10, 20, 30, 40];
for (let number of numbers) {
    console.log(number);
}