const adviceText = document.querySelector('#advice-text');
const generateButton = document.querySelector('#generate-advice');

async function fetchAdvice() {
  const url = 'https://api.adviceslip.com/advice';
  try {
    const response = await fetch(url); // Fetch data
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); // Parse JSON
    adviceText.textContent = `"${data.slip.advice}"`; // Update UI
  } catch (error) {
    console.error('Error fetching advice:', error);
    adviceText.textContent = 'Failed to fetch advice. Please try again.';
  }
}

generateButton.addEventListener('click', fetchAdvice);

fetchAdvice();
