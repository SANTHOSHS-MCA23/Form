document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    // Retrieve form data
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    
    // Do something with the data (e.g., send it to a server, validate it)
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    // Here you can add code to send the data to your server or perform other actions
    // For now, let's just display an alert indicating successful registration
    alert("Registration successful!");
    // You can redirect the user to another page after successful registration
    // window.location.href = "redirectPage.html";
  });
  