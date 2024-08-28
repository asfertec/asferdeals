document.addEventListener('DOMContentLoaded', () => {
    const productLinks = [
        'https://www.amazon.com/QIYVLOS-Organizer-Multi-Functional-Organizers-Compartments/dp/B0CJMDVVV2?th=1&linkCode=ll1&tag=asfertec-20&linkId=22e286498072aa149de6ba9b12f4790b&language=en_US&ref_=as_li_ss_tl',
        'https://www.amazon.com/Travel-Umbrella-Protection-Windproof-Compact/dp/B09B1QV5GF?th=1&linkCode=ll1&tag=asfertec-20&linkId=3fda0e0b53e2258c484b768821d2ce24&language=en_US&ref_=as_li_ss_tl',
        // Añade más enlaces aquí siguiendo este formato
    ];

    function extractASIN(url) {
        // El regex se ajusta para encontrar el ASIN en la URL
        const asinMatch = url.match(/(?:dp|gp\/product|gp\/aw\/d)\/([A-Z0-9]{10})/);
        return asinMatch ? asinMatch[1] : null;
    }

    function generateImageUrl(asin) {
        // Genera la URL de la imagen en base al ASIN
        return `https://m.media-amazon.com/images/I/${asin}.jpg`;
    }

    function checkImage(url) {
        return fetch(url, { method: 'HEAD' })
            .then(response => response.ok)
            .catch(() => false);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
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
            shuffleAndDisplayProducts();
            window.open(url, '_blank');
        });

        return productDiv;
    }

    function shuffleAndDisplayProducts() {
        const productGrid = document.getElementById('product-grid');
        productGrid.innerHTML = '';  // Limpia la cuadrícula
        shuffleArray(productLinks);  // Reorganiza los enlaces
        productLinks.forEach(link => {
            const productElement = createProductElement(link);
            productGrid.appendChild(productElement);
        });
    }

    // Inicializar y mostrar los productos
    shuffleAndDisplayProducts();
});
