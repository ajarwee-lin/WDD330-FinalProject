document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is loaded and ready!");

    // Placeholder functions for different features
    async function handleSignUp() {
        const user = {
            username: "newuser",
            password: "password123"
        };
        const response = await fetch("https://mockapi.io/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        const data = await response.json();
        console.log("User signed up:", data);
    }

    async function handleLogIn() {
        const user = {
            username: "newuser",
            password: "password123"
        };
        const response = await fetch("https://mockapi.io/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        const data = await response.json();
        console.log("User logged in:", data);
    }

    async function handleLogOut() {
        console.log("User logged out");
    }

    async function handlePasswordReset() {
        console.log("Password reset");
    }

    async function addProduct() {
        const product = {
            title: "New Product",
            price: 29.99,
            description: "This is a new product",
            image: "https://via.placeholder.com/150",
            category: "electronics"
        };
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        console.log("Product added:", data);
    }

    async function updateProduct() {
        const updatedProduct = {
            title: "Updated Product",
            price: 19.99
        };
        const response = await fetch("https://fakestoreapi.com/products/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        });
        const data = await response.json();
        console.log("Product updated:", data);
    }

    async function deleteProduct() {
        const response = await fetch("https://fakestoreapi.com/products/1", {
            method: "DELETE"
        });
        const data = await response.json();
        console.log("Product deleted:", data);
    }

    async function addToCart() {
        const cartItem = {
            productId: 1,
            quantity: 1
        };
        const response = await fetch("https://fakestoreapi.com/carts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cartItem)
        });
        const data = await response.json();
        console.log("Added to cart:", data);
    }

    async function viewCart() {
        const response = await fetch("https://fakestoreapi.com/carts/user/1");
        const data = await response.json();
        console.log("Cart details:", data);
    }

    async function checkout() {
        console.log("Checkout");
    }

    async function processOrder() {
        console.log("Order processed");
    }

    async function trackOrder() {
        console.log("Order tracked");
    }

    async function leaveReview() {
        console.log("Review left");
    }

    async function searchProducts() {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log("Search products:", data);
    }

    async function filterProducts() {
        const response = await fetch("https://fakestoreapi.com/products/category/electronics");
        const data = await response.json();
        console.log("Filtered products:", data);
    }

    // Event listeners for user actions
    document.querySelector("#sign-up-btn").addEventListener("click", handleSignUp);
    document.querySelector("#log-in-btn").addEventListener("click", handleLogIn);
    document.querySelector("#log-out-btn").addEventListener("click", handleLogOut);
    document.querySelector("#add-product-btn").addEventListener("click", addProduct);
    document.querySelector("#update-product-btn").addEventListener("click", updateProduct);
    document.querySelector("#delete-product-btn").addEventListener("click", deleteProduct);
    document.querySelector("#add-to-cart-btn").addEventListener("click", addToCart);
    document.querySelector("#view-cart-btn").addEventListener("click", viewCart);
    document.querySelector("#checkout-btn").addEventListener("click", checkout);
    document.querySelector("#search-products-btn").addEventListener("click", searchProducts);
    document.querySelector("#filter-products-btn").addEventListener("click", filterProducts);
});
