function greetWithDelay(name, callback) {
    setTimeout(() => {
        const message = `Hello, ${name}!`;
        document.getElementById('greetOutput').innerText = message;
        callback();
    }, 2000);
}

document.getElementById('greetBtn').addEventListener('click', () => {
    greetWithDelay("Ioane", () => {
        const callbackMessage = "Callback executed after greeting!";
        document.getElementById('greetOutput').innerText += `\n${callbackMessage}`;
    });
});

function simulateProcess(message, callback) {
    setTimeout(() => {
        document.getElementById('processOutput').innerText = message;
        callback();
    }, 2000);
}

document.getElementById('processBtn').addEventListener('click', () => {
    simulateProcess("Process started...", () => {
        const completionMessage = "Process completed!";
        document.getElementById('processOutput').innerText += `\n${completionMessage}`;
    });
});

function processArrayWithDelay(numbers, callback) {
    setTimeout(() => {
        const squaredArray = numbers.map(num => num * num);
        callback(squaredArray);
    }, 2000);
}

document.getElementById('arrayBtn').addEventListener('click', () => {
    const numbers = [1, 2, 3, 4];
    processArrayWithDelay(numbers, (result) => {
        const outputMessage = `Original Array: [${numbers.join(', ')}]\nSquared Array: [${result.join(', ')}]`;
        document.getElementById('arrayOutput').innerText = outputMessage;
    });
});

function changeColorWithDelay(color, callback) {
    setTimeout(() => {
        callback(color);
    }, 2000);
}

document.getElementById('colorBtn').addEventListener('click', () => {
    const color = document.getElementById('colorPicker').value;
    changeColorWithDelay(color, (newColor) => {
        const textElement = document.getElementById('colorText');
        textElement.style.color = newColor;
        const outputMessage = `Text color changed to ${newColor} after delay.`;
        document.getElementById('colorOutput').innerText = outputMessage;
    });
});

function welcomeUser(callback) {
    const name = prompt("Please enter your name:");
    if (!name) {
        alert("Name cannot be empty!");
        return;
    }
    setTimeout(() => {
        const welcomeMessage = `Welcome, ${name}! We're glad to assist you.`;
        callback(welcomeMessage);
    }, 3000);
}

document.getElementById('welcomeBtn').addEventListener('click', () => {
    welcomeUser((message) => {
        document.getElementById('welcomeOutput').innerText = message;
    });
});
