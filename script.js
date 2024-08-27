document.addEventListener('DOMContentLoaded', () => {
    const productLinks = [
        'https://www.amazon.com/QIYVLOS-Organizer-Multi-Functional-Organizers-Compartments/dp/B0CJMDVVV2?th=1&linkCode=ll1&tag=asfertec-20&linkId=22e286498072aa149de6ba9b12f4790b&language=en_US&ref_=as_li_ss_tl',
        'https://www.amazon.com/Travel-Umbrella-Protection-Windproof-Compact/dp/B09B1QV5GF?th=1&linkCode=ll1&tag=asfertec-20&linkId=3fda0e0b53e2258c484b768821d2ce24&language=en_US&ref_=as_li_ss_tl',
        // Añade más enlaces aquí siguiendo este formato
    ];

    function extractASIN(url) {
        const asinMatch = url.match(/(?:dp|gp\/product|gp\/aw\/d)\/([A-Z0-9]{10})/);
        return asinMatch ? asinMatch[1] : null;
    }

    function generateImageUrl(asin) {
        return `https://m.media-amazon.com/images/I/${asin}._SL500_.jpg`;
    }

    function checkImage(url) {
        return fetch(url, { method: 'HEAD' })
            .then(response => response.ok)
            .catch(() => false);
    }

    function createProductLinkElement(url) {
        const link = document.createElement('a');
        link.href = url;
        link.textContent = url;
        link.target = '_blank';
        return link;
    }

    function createProductElement(url) {
        const asin = extractASIN(url);
        const imageUrl = asin ? generateImageUrl(asin) : 'https://via.placeholder.com/150';

        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const img = document.createElement('img');
        img.alt = 'Producto';

        checkImage(imageUrl).then(isAvailable => {
            img.src = isAvailable ? imageUrl : 'https://via.placeholder.com/150';
        });

        productDiv.appendChild(img);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productName = document.createElement('h2');
        productName.textContent = 'Producto';
        productInfo.appendChild(productName);

        productDiv.appendChild(productInfo);

        productDiv.addEventListener('click', () => {
            window.location.href = url;
        });

        return productDiv;
    }

    function loadProductLinks() {
        const linkList = document.getElementById('product-links');
        productLinks.forEach(link => {
            const listItem = document.createElement('li');
            listItem.appendChild(createProductLinkElement(link));
            linkList.appendChild(listItem);
        });
    }

    function loadProducts() {
        const productGrid = document.getElementById('product-grid');
        productLinks.forEach(link => {
            const productElement = createProductElement(link);
            productGrid.appendChild(productElement);
        });
    }

    loadProductLinks();
    loadProducts();
});
