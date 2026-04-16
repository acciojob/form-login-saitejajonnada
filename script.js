 
 const form = document.getElementById("nameForm");

 form.addEventListener("submit", function(event) {

     event.preventDefault();

     const fname = document.querySelector("#fname").value;

     const lname = document.querySelector("#lname").value;

     const fullName = fname + " " + lname;

     alert(fullName);
});
 