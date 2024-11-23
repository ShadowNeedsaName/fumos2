function questionario() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if (name === "" || email === "" || message === "") {
        alert("Ingrese informacion en todos los campos.");
        return false;
    }
    alert("Se a enviado su mensaje correctamente");
    return true;
    }
document.addEventListener("DOMContentLoaded", function() {
    let fumoimage = ["https://resize.cdn.otakumode.com/ex/300.300/2.152.998.997/shop/product/42c16dffc8e443f48d83cdd4046f2e10.jpg", "https://pbs.twimg.com/media/Fo6IT5GaYAAhdKc.jpg", "https://images-na.ssl-images-amazon.com/images/I/518hoCBmucL._AC_SX466_.jpg", "https://i.ebayimg.com/images/g/qtIAAOSwn8hlly2B/s-l1600.jpg"];
    let dekafumoimg = ["https://static.myfigurecollection.net/upload/items/1/10490-36b20.jpg", "https://images-cdn.ubuy.co.in/634eae0763e67d17f865be8f-20cm-touhou-project-fumo-fumo-cirno.jpg", "https://media.karousell.com/media/photos/products/2022/10/30/touhou_project_deka_fumo_fland_1667124858_f66e43fe.jpg","https://static.myfigurecollection.net/upload/items/1/22449-a6352.jpg"];
    let currentImageIndex1 = 0;
    let currentImageIndex = 0;
    setInterval(() => {
        currentImageIndex1 = (currentImageIndex1 + 1) % fumoimage.length;
        document.querySelector(".fumo-image").src = fumoimage[currentImageIndex1];
    }, 5000);

    // producots
    const productList = document.getElementById("product-list");
    const popup = document.getElementById("product-popup");
    const popupContent = document.getElementById("popup-content");
    const closePopup = document.getElementById("close-popup");
    const cartButton = document.getElementById("shopping-cart-button");
    const cartPopup = document.getElementById("cart-popup");
    const closeCart = document.getElementById("close-cart");
    const cartItems = document.getElementById("cart-items");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    updateCartUI(); // Update cart UI on page load

    productList.addEventListener("click", function(event) {
        const target = event.target;
        if (target.tagName.toLowerCase() === "img") {
            const parentDiv = target.closest(".fumosdiv");
            const images = parentDiv.dataset.images.split(',');
            const descriptions = parentDiv.dataset.descriptions.split(',');
            const description = parentDiv.dataset.description.split(',');
            const prices = parentDiv.dataset.prices.split(',');

            // Clear existing content
            popupContent.innerHTML = '';

            // Populate the popup with multiple images, descriptions, and "Buy" buttons
            images.forEach((imgSrc, index) => {
                const imgElement = document.createElement('img');
                imgElement.src = imgSrc;
                const textElementPrice = document.createElement('p');
                textElementPrice.innerText = prices[index] || '';

                const textElementName = document.createElement('p');
                textElementName.innerText = descriptions[index] || '';

                const textElementDescription = document.createElement('p');
                textElementDescription.innerText = description[index] || '';

                const buyButton = document.createElement('button');
                buyButton.innerText = "Comprar";
                buyButton.addEventListener("click", function(event) {
                    addToCart(event, descriptions[index] || 'this item', parseInt(prices[index], 10), imgSrc, description[index]);
                });

                const contentDiv = document.createElement('div');
                contentDiv.className = 'content';
                contentDiv.appendChild(imgElement);
                contentDiv.appendChild(textElementPrice);
                contentDiv.appendChild(textElementName);
                contentDiv.appendChild(textElementDescription);
                contentDiv.appendChild(buyButton);

                popupContent.appendChild(contentDiv);
            });

            // Show the popup
            popup.style.display = "block";
        }
    });

    closePopup.addEventListener("click", function() {
        popup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    cartButton.addEventListener("click", function() {
        toggleCart();
        updateCartUI();
    });

    closeCart.addEventListener("click", function() {
        cartPopup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === cartPopup) {
            cartPopup.style.display = "none";
        }
    });

    function addToCart(event, itemName, price, imgSrc, description) {
        event.stopPropagation();
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ name: itemName, description:description, price: price, img: imgSrc });
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartUI();
        alert(`${itemName} se a añadido al carrito.`);
        popup.style.display = "none";
    }

    function updateCartUI() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('cart-item');
            listItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <p>${item.name} -${item.description}- $${item.price}</p>
                <button onclick="removeFromCart(${index})">Cancelar</button>
            `;
            cartItems.appendChild(listItem);
            total += item.price;
        });
        document.getElementById("cart-total").innerText = `Total: $${total}`;
        cartButton.innerText = `Carrito (${cart.length})`;
    }

    window.removeFromCart = function(index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartUI();
    }

    function toggleCart() {
        cartPopup.style.display = cartPopup.style.display === "block" ? "none" : "block";
    }

    window.checkout = function() {
        alert("Fumos Comprados");
        localStorage.removeItem("cart");
        updateCartUI();
        toggleCart();
    }
});

