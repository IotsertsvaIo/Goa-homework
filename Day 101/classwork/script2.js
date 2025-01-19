document.getElementById("fetchProduct").addEventListener("click", () => {
    const randomId = Math.floor(Math.random() * 20) + 1;
    fetch(`https://fakestoreapi.com/products/${randomId}`)
        .then(response => {
            if (response.status === 404) {
                const productContainer = document.getElementById("productContainer");
                productContainer.innerHTML = `<p>Error 404: Product not found.</p><img src="https://via.placeholder.com/400x200?text=404+Not+Found" alt="404 Error">`;
                throw new Error("404 Error: Product not found.");
            } else if (!response.ok) {
                throw new Error(`Something went wrong! Error ${response.status}`);
            }
            return response.json();
        })
        .then(product => {
            const productContainer = document.getElementById("productContainer");
            productContainer.innerHTML = `
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <img src="${product.image}" alt="${product.title}" width="200">
                <p>Price: $${product.price}</p>
            `;
        })
        .catch(error => {
            if (error.message !== "404 Error: Product not found.") {
                console.error(error);
            }
        });
});
