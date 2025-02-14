import Product from './modules.mjs'; 
import { discountPrice, taxRate as VAT } from './modules.mjs'; 

const product1 = new Product("Laptop", 1000);
console.log(product1.getInfo());

const discountedPrice = discountPrice(product1.price, 10);
console.log(`Discounted Price: $${discountedPrice}`);

const finalPrice = discountedPrice + (discountedPrice * VAT);
console.log(`Final Price with Tax: $${finalPrice}`);
