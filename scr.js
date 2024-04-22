// Simulated database for storing registered users
var users = [];

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check if the username is already taken
    if (users.find(user => user.username === username)) {
        document.getElementById("errorMessage").innerText = "Username already exists. Please choose another one.";
        return;
    }
    
    // Store the user in the database
    users.push({ username: username, password: password });
    alert("Registration successful!");
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;
    
    // Find the user in the database
    var user = users.find(user => user.username === loginUsername && user.password === loginPassword);
    
    if (user) {
       window.location.href = "allowed_page.html";
        // Redirect to the dashboard or allowed page
    } else {
        document.getElementById("errorMessage").innerText = "Invalid username or password. Please try again.";
    }
});