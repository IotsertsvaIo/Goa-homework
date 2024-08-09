const p = document.getElementById("p1", "p2")
const button = document.getElementById("btn1", "btn2")

let number = 0

btn1.addEventListener("click",function(){
    number += 1
    p1.textContent = number
})

let number1 = 0

btn2.addEventListener("click",function(){
    number1 += 1
    p2.textContent = number
})