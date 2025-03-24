document.getElementById("generate").addEventListener("click", () => {
    let num = document.getElementById("number").value;
    let output = document.getElementById("output");
    output.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        output.innerHTML += `${num} x ${i} = ${num * i}<br>`;
    }
});
