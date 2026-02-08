// main.js
document.addEventListener('DOMContentLoaded', function() {
    const cart = [];
    
    // Function to add product to cart
    function addToCart(product) {
        cart.push(product);
        updateCartCount();
        alert(`${product.name} has been added to your cart.`);
    }

    // Function to update cart count display
    function updateCartCount() {
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    // Function to filter products
    function filterProducts(category) {
        const products = document.querySelectorAll('.product-card');
        products.forEach(product => {
            if (product.dataset.category === category || category === 'all') {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Event listeners for category filters
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            filterProducts(category);
        });
    });

    // Event listeners for add to cart buttons
    document.querySelectorAll('.add-to-cart-button').forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const product = {
                name: productCard.querySelector('.product-name').textContent,
                price: productCard.querySelector('.product-price').textContent,
                image: productCard.querySelector('.product-image').src
            };
            addToCart(product);
        });
    });

    // Facebook integration (placeholder)
    document.getElementById('facebook-share').addEventListener('click', function() {
        // Logic for sharing on Facebook
        alert('Sharing on Facebook...');
    });
});