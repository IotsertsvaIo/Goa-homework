export default class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        return `${this.name} costs $${this.price}`;
    }
}

export function discountPrice(price, discount) {
    return price - (price * discount) / 100;
}

export const taxRate = 0.15;
