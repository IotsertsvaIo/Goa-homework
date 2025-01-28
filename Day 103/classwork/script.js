let userId = 1;

document.getElementById('loadUser').addEventListener('click', () => {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      const userContainer = document.getElementById('userContainer');
      const userText = document.createElement('p');
      userText.textContent = `${userId}. სახელი: ${user.name}, ელ.ფოსტა: ${user.email}, ტელეფონი: ${user.phone}`;
      userContainer.appendChild(userText);
      userId++;
    })
    .catch(error => console.error('მოხდა შეცდომა:', error));
});
