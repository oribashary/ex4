function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var pass = document.getElementById("pass").value;
    var mail = document.getElementById("mail").value;
    var website = document.getElementById("website").value;
    var phone = document.getElementById("phone").value;
    var coffee = document.getElementById("coffee").value;
    var temper = document.getElementById("temper").value; //future use
    var address = document.getElementById("address").value; //future use
    var interests = document.querySelectorAll('input[name="interests[]"]:checked');
    var gender = document.getElementById("gender").value;
    var passPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    var isValid = true;

    if (fullName.trim() === "") {
        document.getElementById("fullNameError").innerHTML = "Please enter your full name";
        isValid = false;
    } else if (fullName.indexOf(" ") === -1) {
        document.getElementById("fullNameError").innerHTML = "Full name must contain space";
        isValid = false;
    } else {
        document.getElementById("fullNameError").innerHTML = "";
    }

    if (pass === "") {
        passError.innerHTML = "Please enter your password";
        isValid = false;
    } else if (!passPattern.test(pass)) {
        passError.innerHTML = "Your password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number";
        isValid = false;
    } else {
        passError.innerHTML = "";
    }

    if (mail === "") {
        document.getElementById("mailError").innerHTML = "Please enter your email";
        isValid = false;
    } else {
        document.getElementById("mailError").innerHTML = "";
    }

    if (website === "") {
        document.getElementById("websiteError").innerHTML = "Please enter your website URL";
        isValid = false;
    } else {
        document.getElementById("websiteError").innerHTML = "";
    }

    if (phone === "") {
        document.getElementById("phoneError").innerHTML = "Please enter your phone number";
        isValid = false;
    } else {
        document.getElementById("phoneError").innerHTML = "";
    }

    if (coffee === "") {
        document.getElementById("coffeeError").innerHTML = "Please select amount of coffee";
        isValid = false;
    } else {
        document.getElementById("coffeeError").innerHTML = "";
    }

    if (gender === "") {
        document.getElementById("genderError").innerHTML = "Please select your gender";
        isValid = false;
    } else {
        document.getElementById("genderError").innerHTML = "";
    }

    if (interests.length === 0) {
        document.getElementById("interestsError").innerHTML = "Please select at least one interest";
        isValid = false;
    } else {
        document.getElementById("interestsError").innerHTML = "";
    }

    return isValid;
}
