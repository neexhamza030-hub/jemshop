// Get cart from browser storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add product to cart
function addToCart(name, price, image) {

    const product = {
        name: name,
        price: price,
        image: image,
        quantity: 1
    };

    // Check if product already exists
    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push(product);
    }

    // Save cart
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " has been added to your cart!");
}