const loginScreen = document.getElementById("login-screen");
const gameScreen = document.getElementById("game-screen");
const startGameButton = document.getElementById("start-game");
const usernameInput = document.getElementById("username");
const welcomeMessage = document.getElementById("welcome-message");
const backgroundPicker = document.getElementById("background-picker");
const numberInput = document.getElementById("number-input");
const checkNumberButton = document.getElementById("check-number");
const rangeDisplay = document.getElementById("range");
const scoreDisplay = document.getElementById("score");

let score = 0;
let maxNumber = 2;
let randomNumber = generateRandomNumber(maxNumber);


startGameButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (username) {
        localStorage.setItem("username", username);
        localStorage.setItem("score", score);
        localStorage.setItem("maxNumber", maxNumber);
        showGameScreen(username);
    }
});


backgroundPicker.addEventListener("input", (e) => {
    document.body.style.backgroundColor = e.target.value;
});


checkNumberButton.addEventListener("click", () => {
    const guessedNumber = Number(numberInput.value);
    if (guessedNumber === randomNumber) {
        score++;
        maxNumber *= 2;
        randomNumber = generateRandomNumber(maxNumber);
        localStorage.setItem("score", score);
        localStorage.setItem("maxNumber", maxNumber);
    }
    updateGameInfo();
});

function showGameScreen(username) {
    loginScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    welcomeMessage.textContent = `კეთილი იყოს შენი მობრძანება, ${username}!`;
    updateGameInfo();
}

function updateGameInfo() {
    rangeDisplay.textContent = `1-${maxNumber}`;
    scoreDisplay.textContent = score;
    numberInput.value = "";
}


function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

window.onload = () => {
    const savedUsername = localStorage.getItem("username");
    const savedScore = localStorage.getItem("score");
    const savedMaxNumber = localStorage.getItem("maxNumber");

    if (savedUsername) {
        score = Number(savedScore);
        maxNumber = Number(savedMaxNumber);
        randomNumber = generateRandomNumber(maxNumber);
        showGameScreen(savedUsername);
    } else {
        loginScreen.classList.remove("hidden");
    }
};
