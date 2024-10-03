fetch('product.json')
    .then(response => response.json())
    .then(data => {
        const productsDiv = document.getElementById('products');
        data.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.textContent = product.name;
            productsDiv.appendChild(productDiv);
        });
    });
