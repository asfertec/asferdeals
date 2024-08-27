document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Producto 1', url: https://www.amazon.com/HUNTER-Original-Short-Boots-Women/dp/B09ZSPXX6Q?&linkCode=ll1&tag=asfertec-20&linkId=dc8e3849ad0470d04608aeab96d1e185&language=en_US&ref_=as_li_ss_tl },
        { id: 2, name: 'Producto 2', url: https://www.amazon.com/Travel-Umbrella-Protection-Windproof-Compact/dp/B09B1QV5GF?th=1&linkCode=ll1&tag=asfertec-20&linkId=3fda0e0b53e2258c484b768821d2ce24&language=en_US&ref_=as_li_ss_tl },
        { id: 3, name: 'Producto 3', url: 'https://www.amazon.com/dp/B08N5WRLDK' },
        { id: 4, name: 'Producto 4', url: 'https://www.amazon.com/dp/B089KV4YYX' },
        { id: 5, name: 'Producto 5', url: 'https://www.amazon.com/dp/B09156B7TM' },
        // Añadir más productos aquí con enlaces largos
    ];

    function extractASIN(url) {
        const asinMatch = url.match(/\/dp\/([A-Z0-9]{10})/);
        return asinMatch ? asinMatch[1] : null;
    }

    function generateImageUrl(asin) {
        return `https://images-na.ssl-images-amazon.com/images/I/${asin}.jpg`;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createProductElement(product) {
        const asin = extractASIN(product.url);
        const imageUrl = asin ? generateImageUrl(asin) : 'https://via.placeholder.com/150';
        
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${imageUrl}" alt="${product.name}">
            <div class="product-info">
                <h2>${product.name}</h2>
            </div>
        `;
        productDiv.addEventListener('click', () => {
            window.location.href = product.url;
        });
        return productDiv;
    }

    function loadProducts() {
        const productGrid = document.getElementById('product-grid');
        shuffleArray(products);
        products.forEach(product => {
            const productElement = createProductElement(product);
            productGrid.appendChild(productElement);
        });
    }

    loadProducts();
});
