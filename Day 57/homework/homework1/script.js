const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")

let second = p2.style.color = "white"

p1.addEventListener("click", function() {
    second.style.color = "green"
    p1.textContent = second
    console.log(p1)
})