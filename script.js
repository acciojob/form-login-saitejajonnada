document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("nameForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from refreshing the page
        
        let firstName = document.getElementById("firstName").value.trim();
        let lastName = document.getElementById("lastName").value.trim();
        
        if (firstName === "" || lastName === "") {
            alert("Please enter both First Name and Last Name.");
        } else {
            alert("Full Name: " + firstName + " " + lastName);
        }
    });
});
