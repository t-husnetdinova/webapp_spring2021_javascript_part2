// function to toggle the visibility of the travel question
function updateCountryView() {
    // grab the elements by id
    var travel = document.getElementById("travel");
    var divCountry = document.getElementById("divCountry");

    // if yes is selected
    if(travel.value == "Yes") {
        divCountry.classList.remove("invisible");
    }
    // no error, make it nice again
    // if they change their mind
    else {
        divCountry.classList.add("invisible");
    }
}

// function to validate form
function validateForm() {
    // check 1: date of birth
    var dob = document.querySelector("#dob");
    var divDobError = document.querySelector("#divDobError");
    var formIsValid = true;

    // input is empty
    if(dob.value == "") {
        // error
        divDobError.classList.remove("invisible");
        divDobError.innerHTML = "The date of birth cannot be empty!"
        dob.classList.add("hasError");
        formIsValid = false;
    }
    else {
        var dobDate = new Date(dob.value);
        // if we don't pass anything in, becomes today's date
        var todayDate = new Date();

        if(dobDate >= todayDate) {
            // error
            divDobError.classList.remove("invisible");
            divDobError.innerHTML = "The date of birth cannot be after today's date!"
            dob.classList.add("hasError");
            formIsValid = false;
        }
        else {
            // no error, make it nice again
            divDobError.classList.add("invisible");
            divDobError.innerHTML = ""
            dob.classList.remove("hasError");
        }
    }
    
    // check 2: countries
    var travel = document.querySelector("#travel");
    var divCountryError = document.querySelector("#divCountryError");
    
    if(travel.value == "Yes") {
        var travelYes = document.querySelector("#travelYes");
        if(travelYes.value == "") {
            // error
            divCountryError.classList.remove("invisible");
            divCountryError.innerHTML = "Please list countries you've visited!";
            travelYes.classList.add("hasError");
            formIsValid = false;
        }
        else {
            // no error, make it nice again
            divCountryError.classList.add("invisible");
            divCountryError.innerHTML = "";
            travelYes.classList.remove("hasError");
            formIsValid = true;
        }
    }

    // check 3: input validation
    var elements = document.getElementsByTagName("input");
    var invalidChars = ['<', '>', '!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '?'];
    
    for(let i = 0; i < elements.length; i++) {
        for(let j = 0; j < invalidChars.length; j++) {
            if(elements[i].value.indexOf(invalidChars[j]) != -1) {
                elements[i].classList.add("hasError");
                formIsValid = false;
            }
            else {
                elements[i].classList.remove("hasError");
                formIsValid = true;
            }
        }
        
    }
    return formIsValid;
}