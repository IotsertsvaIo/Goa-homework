// Exercise 1
let p = document.createElement("p");
p.textContent = "Hello World";
document.body.appendChild(p);

// Exercise 2
let div = document.querySelector("div");
let divClone = div.cloneNode(true);
document.body.appendChild(divClone);

// Exercise 3
let li = document.querySelector("li");
li.parentNode.removeChild(li);

// Exercise 4
let h1 = document.querySelector("h1");
let h2 = document.createElement("h2");
h2.textContent = "New Heading";
h1.parentNode.replaceChild(h2, h1);

// Exercise 5
let paragraph = document.querySelector("p");
paragraph.remove();

// Exercise 7
let divContainer = document.createElement("div");
for (let i = 0; i < 3; i++) {
  let span = document.createElement("span");
  divContainer.appendChild(span);
}
document.body.appendChild(divContainer);

// Exercise 8
let button = document.querySelector("button");
let buttonClone = button.cloneNode(true);
buttonClone.addEventListener("click", () => alert("Button clicked"));
document.body.appendChild(buttonClone);

// Exercise 9
let img = document.querySelector("img");
let targetDiv = document.querySelector("div#target");
targetDiv.appendChild(img);

// Exercise 10
let message = document.createElement("p");
message.textContent = "This is a message";
document.body.appendChild(message);
setTimeout(() => message.remove(), 3000);