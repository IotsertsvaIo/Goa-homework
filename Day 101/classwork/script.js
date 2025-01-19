document.getElementById("fetchDog").addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const dogContainer = document.getElementById("dogContainer");
            dogContainer.innerHTML = `<img src="${data.message}" alt="Random Dog" width="300">`;
        })
        .catch(error => {
            console.error(error);
            document.getElementById("dogContainer").innerText = "Failed to load dog image.";
        });
});
