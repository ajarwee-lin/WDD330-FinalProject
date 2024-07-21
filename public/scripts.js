document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is loaded and ready!");

    async function handleSignUp(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const user = { username, email, password };

        const response = await fetch("https://mockapi.io/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });

        const data = await response.json();
        console.log("User signed up:", data);
        alert("Sign up successful!");
    }

    document.getElementById("signup-form").addEventListener("submit", handleSignUp);
});
