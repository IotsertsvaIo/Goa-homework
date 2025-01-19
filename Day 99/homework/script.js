fetch('https://fakestoreapi.com/products/1')
  .then(response => response.json())
  .then(product => {
    console.log(product);
    const productContainer = document.createElement('div');
    productContainer.style.width = '300px';
    productContainer.style.padding = '10px';
    productContainer.style.border = '1px solid #ccc';
    productContainer.style.borderRadius = '8px';
    productContainer.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    productContainer.style.textAlign = 'center';
    productContainer.style.backgroundColor = '#f9f9f9';

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.title;
    productImage.style.width = '100px';
    productImage.style.height = '100px';
    productImage.style.objectFit = 'contain';

    const productTitle = document.createElement('h3');
    productTitle.textContent = product.title;
    productTitle.style.fontSize = '16px';
    productTitle.style.margin = '10px 0';

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price}`;
    productPrice.style.fontWeight = 'bold';

    productContainer.appendChild(productImage);
    productContainer.appendChild(productTitle);
    productContainer.appendChild(productPrice);

    document.body.appendChild(productContainer);
  })
  .catch(error => console.error('Error:', error));
