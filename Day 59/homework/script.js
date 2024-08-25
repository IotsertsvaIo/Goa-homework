// ფორმის სელექტორი
const form = document.getElementById('registrationForm');
        
// ფორმის სუბმიტის ივენთი
form.addEventListener('submit', function(event) {
    // თავიდან ვხშობთ ფორმის სტანდარტულ სუბმიტს
    event.preventDefault();
    
    // ვღებულობთ შესატანი ველების მნიშვნელობებს
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // ვამოწმებთ ველები ცარიელი ხომ არ არის
    if (fullName === "" || email === "" || password === "") {
        // თუ რაიმე ველი ცარიელია, შეტყობინება
        document.getElementById('message').innerText = "All fields are required!";
    } else {
        // თუ ყველა ველი შევსებულია, შეტყობინება და მონაცემების გამოტანა კონსოლში
        document.getElementById('message').innerText = "All fields are filled!";
        console.log("Full Name: " + fullName);
        console.log("Email: " + email);
        console.log("Password: " + password);
    }
});
