const adviceText = document.getElementById('adviceText');
const adviceButton = document.getElementById('adviceButton');
const apiURL = 'https://api.adviceslip.com/advice';

const fetchAdvice = async () => {
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error('Failed to fetch advice. Please try again later.');
        }
        const data = await response.json();
        adviceText.textContent = `"${data.slip.advice}"`;
    } catch (error) {
        adviceText.textContent = error.message;
    }
};

adviceButton.addEventListener('click', fetchAdvice);
