import Product from './class.mjs';

const products = [
    new Product("Laptop", 999, "laptop.jpg"),
    new Product("Phone", 699, "phone.jpg"),
    new Product("Headphones", 199, "headphones.jpg")
];

const shopContainer = document.getElementById("shop");

products.forEach(product => {
    shopContainer.innerHTML += product.getHTML();
});
