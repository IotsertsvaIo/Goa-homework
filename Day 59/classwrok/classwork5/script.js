const p1 = document.getElementById("p1")
const btn1 = document.getElementById("btn1")

let num = 0

btn1.addEventListener("click", function() {
    num ++
    p1.textContent = num
})