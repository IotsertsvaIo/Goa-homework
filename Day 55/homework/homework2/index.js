const p = document.getElementById("p1")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

let number = 0

btn1.addEventListener("click", function() {
    number -= 1
    p.textContent = number
})

btn2.addEventListener("click", function() {
    number += 1
    p.textContent = number
})

btn3.addEventListener("click", function() {
    number = 0
    p.textContent = number
})

