document.getElementById('submitBtn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    const output = document.getElementById('output');
    output.innerHTML = `
        <h3>Submitted Information:</h3>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
        <p>Age: ${age}</p>
        <p>Gender: ${gender}</p>
    `;
});
