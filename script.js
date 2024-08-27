{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
    const products = [\
        \{ id: 1, name: 'Producto 1', image: 'image1.jpg', url: 'https://www.amazon.com/product1' \},\
        \{ id: 2, name: 'Producto 2', image: 'image2.jpg', url: 'https://www.amazon.com/product2' \},\
        \{ id: 3, name: 'Producto 3', image: 'image3.jpg', url: 'https://www.amazon.com/product3' \},\
        \{ id: 4, name: 'Producto 4', image: 'image4.jpg', url: 'https://www.amazon.com/product4' \},\
        \{ id: 5, name: 'Producto 5', image: 'image5.jpg', url: 'https://www.amazon.com/product5' \},\
        // A\'f1adir m\'e1s productos aqu\'ed\
    ];\
\
    function shuffleArray(array) \{\
        for (let i = array.length - 1; i > 0; i--) \{\
            const j = Math.floor(Math.random() * (i + 1));\
            [array[i], array[j]] = [array[j], array[i]];\
        \}\
    \}\
\
    function createProductElement(product) \{\
        const productDiv = document.createElement('div');\
        productDiv.classList.add('product');\
        productDiv.innerHTML = `\
            <img src="$\{product.image\}" alt="$\{product.name\}">\
            <div class="product-info">\
                <h2>$\{product.name\}</h2>\
            </div>\
        `;\
        productDiv.addEventListener('click', () => \{\
            window.location.href = product.url;\
        \});\
        return productDiv;\
    \}\
\
    function loadProducts() \{\
        const productGrid = document.getElementById('product-grid');\
        shuffleArray(products);\
        products.forEach(product => \{\
            const productElement = createProductElement(product);\
            productGrid.appendChild(productElement);\
        \});\
    \}\
\
    loadProducts();\
\});\
}
