document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: Producto 1 , url: https://www.amazon.com/QIYVLOS-Organizer-Multi-Functional-Organizers-Compartments/dp/B0CJMDVVV2?th=1&linkCode=ll1&tag=asfertec-20&linkId=22e286498072aa149de6ba9b12f4790b&language=en_US&ref_=as_li_ss_tl },
        { id: 1, name: Producto 2, url: https://www.amazon.com/Travel-Umbrella-Protection-Windproof-Compact/dp/B09B1QV5GF?th=1&linkCode=ll1&tag=asfertec-20&linkId=3fda0e0b53e2258c484b768821d2ce24&language=en_US&ref_=as_li_ss_tl },

        
        // Añade más productos aquí siguiendo este formato
    ];

    function extractASIN(url) {
        const asinMatch = url.match(/(?:dp|gp\/product|gp\/aw\/d)\/([A-Z0-9]{10})/);
        return asinMatch ? asinMatch[1] : null;
    }

    function generateImageUrl(asin) {
        return `https://m.media-amazon.com/images/I/${asin}._SL500_.jpg`;
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
