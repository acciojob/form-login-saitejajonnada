function getFormvalue() {
	event.preventDefault();  
    let firstName = document.forms["myForm"]["fname"].value;
    let lastName = document.forms["myForm"]["lname"].value;
    alert(firstName + " " + lastName);
        
}
