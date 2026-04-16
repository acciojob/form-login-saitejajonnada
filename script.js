<script>
// Step 1: Access form
const form = document.getElementById("nameForm");

// Step 2: Add event listener
form.addEventListener("submit", function(event) {

    // Step 3: Prevent page reload
    event.preventDefault();

    // Step 4: Get first name
    const fname = document.querySelector("#fname").value;

    // Step 5: Get last name
    const lname = document.querySelector("#lname").value;

    // Step 6: Combine names
    const fullName = fname + " " + lname;

    // Step 7: Show alert
    alert(fullName);
});
</script>