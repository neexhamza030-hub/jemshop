// ===============================
// JEM Protein - admin.js
// ===============================

// Get products from localStorage
let products = JSON.parse(localStorage.getItem("products")) || [];

// -------------------------------
// Login (temporary)
// -------------------------------
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "admin@jemprotein.com" && password === "123456") {

            window.location.href = "admin.html";

        } else {

            document.getElementById("loginMessage").innerText =
                "Wrong email or password.";

        }

    });

}

// -------------------------------
// Add Product
// -------------------------------
const productForm = document.getElementById("productForm");

if (productForm) {

    productForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const product = {

            id: Date.now(),

            name: document.getElementById("name").value,

            price: document.getElementById("price").value,

            category: document.getElementById("category").value,

            stock: document.getElementById("stock").value,

            description: document.getElementById("description").value

        };

        products.push(product);

        localStorage.setItem("products", JSON.stringify(products));

        alert("Product Published!");

        productForm.reset();

        displayProducts();

    });

}

// -------------------------------
// Display Products
// -------------------------------
function displayProducts() {

    const container = document.getElementById("adminProducts");

    if (!container) return;

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `

        <div class="product-card">

            <h3>${product.name}</h3>

            <p>Price: $${product.price}</p>

            <p>Category: ${product.category}</p>

            <p>Stock: ${product.stock}</p>

            <button onclick="deleteProduct(${product.id})">
            Delete
            </button>

        </div>

        `;

    });

}

// -------------------------------
// Delete Product
// -------------------------------
function deleteProduct(id) {

    products = products.filter(product => product.id !== id);

    localStorage.setItem("products", JSON.stringify(products));

    displayProducts();

}

// Load products
displayProducts();