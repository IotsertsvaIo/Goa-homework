function Account(firstName, lastName, age, email, username) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.username = username;
}

let accounts = [];

document.getElementById('accountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;

    const newAccount = new Account(firstName, lastName, age, email, username);

    accounts.push(newAccount);

    const accountsList = document.getElementById('accountsList');
    accountsList.innerHTML += `<p>Account ${accounts.length}: ${newAccount.firstName} ${newAccount.lastName}, Age: ${newAccount.age}, Email: ${newAccount.email}, Username: ${newAccount.username}</p>`;

    document.getElementById('accountForm').reset();
});
