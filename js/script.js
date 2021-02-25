function updateCountryView() {
    var travel = document.getElementById("travel");
    var divCountry = document.getElementById("divCountry");

    if(travel.value == "Yes") {
        divCountry.classList.remove("invisible");
    }
}