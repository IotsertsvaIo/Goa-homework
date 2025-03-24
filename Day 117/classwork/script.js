document.getElementById("jokeBtn").addEventListener("click", async () => {
    let jokeBox = document.getElementById("joke");
    let punchlineBox = document.getElementById("punchline");
    
    jokeBox.innerText = "Loading...";
    punchlineBox.innerText = "";

    let response = await fetch("https://v2.jokeapi.dev/joke/Any?type=twopart&safe-mode");
    let data = await response.json();

    jokeBox.innerText = data.setup;

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    punchlineBox.innerText = data.delivery;
});
