let randomNumber = Math.floor(Math.random() * 20) + 1;

document.getElementById("check").addEventListener("click", async () => {
    let guess = document.getElementById("guess").value;
    let result = document.getElementById("result");
    
    await new Promise(resolve => setTimeout(resolve, 500));

    if (guess == randomNumber) {
        result.innerText = "Correct! You guessed the number!";
    } else if (guess < randomNumber) {
        result.innerText = "Too low! Try again.";
    } else {
        result.innerText = "Too high! Try again.";
    }
});
