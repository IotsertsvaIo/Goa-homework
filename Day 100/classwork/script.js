fetch('https://fakestoreapi.com/products?limit=3')
    .then(response => response.json())
    .then(products => {
        const container = document.getElementById('product-container');
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
            `;
            container.appendChild(productDiv);
        });
    });