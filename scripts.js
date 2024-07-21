document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is loaded and ready!");

    async function handleSignUp() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        const user = { username, password };
        const response = await fetch("https://mockapi.io/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
        
        const data = await response.json();
        console.log("User signed up:", data);
        alert("Sign up successful!");
    }

    document.querySelector("#sign-up-btn").addEventListener("click", handleSignUp);
});
