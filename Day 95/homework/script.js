document.getElementById('data-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const age = document.getElementById('age').value;
    const id = document.getElementById('id').value;
    const height = document.getElementById('height').value;
    const description = document.getElementById('description').value;

    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${age}@example.com`;

    const personDiv = document.createElement('div');
    personDiv.className = 'person';
    personDiv.innerHTML = `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>ID:</strong> ${id}</p>
        <p><strong>Height:</strong> ${height} cm</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;

    document.getElementById('people-list').appendChild(personDiv);

    document.getElementById('data-form').reset();
});
