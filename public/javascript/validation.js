function Validation(){
    // Adding variables
    var name = document.forms["userForm"]["Name"].value
    var email = document.forms["userForm"]["Email"].value
    var option = document.forms["userForm"]["options"].value
    // New variable to validate email
    var  formatmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // This will show error message if user will leave empty form
    if (name == "" || name == null) {
        alert("Name must be filled out. Please check it again");
        return false;
      }
    
    if (email == "") {
        alert("Email must be filled out. Please check it again");
        return false;
      }
    // It will check the format of email and pop up alert with message if the format is invalid
    if (!email.match(formatmail)){
        alert("Invalid email, please check it again");
        return false;
    }
    
    if (option == "none") {
        alert("Choose one option in the option menu");
        return false;
    }

    return true;

}
