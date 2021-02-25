// function to toggle the visibility of the travel question
function updateCountryView() {
    // grab the elements by id
    var travel = document.getElementById("travel");
    var divCountry = document.getElementById("divCountry");

    // if yes is selected
    if(travel.value == "Yes") {
        divCountry.classList.remove("invisible");
    }
    // if they change their mind
    else {
        divCountry.classList.add("invisible");
    }
}