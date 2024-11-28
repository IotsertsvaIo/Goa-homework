class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.cart = [];
    }
  
    addToCart(product) {
      this.cart.push(product);
      this.renderCart();
    }
  
    renderCart() {
      const cartItems = document.getElementById('cart-items');
      cartItems.innerHTML = '';
      this.cart.forEach((product) => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price}`;
        cartItems.appendChild(li);
      });
    }
  }
  
  class Shop {
    constructor() {
      this.products = [
        new Product(1, 'Laptop', 999),
        new Product(2, 'Phone', 699),
        new Product(3, 'Headphones', 199),
      ];
      this.cart = new ShoppingCart();
    }
  
    renderProducts() {
      const productList = document.getElementById('product-list');
      this.products.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
          <button onclick="shop.addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
      });
    }
  
    addToCart(productId) {
      const product = this.products.find((p) => p.id === productId);
      if (product) this
  