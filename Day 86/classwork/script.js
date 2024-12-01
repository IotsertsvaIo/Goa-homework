const form = document.getElementById('ageForm');
const result = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const birthDate = new Date(document.getElementById('birthDate').value);
    const today = new Date();

    if (isNaN(birthDate)) {
        result.textContent = "Please enter a valid date.";
        return;
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    result.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
});
