var splitcharges = document.getElementsByClassName("split-charges");
var prices = document.getElementsByClassName("charges-boldtext");
var durations = document.getElementsByClassName("charges-text")

function changeValues(index, text1, text2) {
    prices[index].innerHTML = text1;
    durations[index].innerHTML = text2;
}

for (var i = 0; i < splitcharges.length; i++) {
    splitcharges[i].addEventListener("mouseover", function () {
        var j = parseInt(this.id);
        if (j >= 0 && j <= 2) {
            if (j == 0) {
                changeValues(0, "&#8377 5", "&#47 Day");
            } else if (j == 1) {
                changeValues(0, "&#8377 100", "&#47 Month");
            } else {
                changeValues(0, "&#8377 500", "&#47 Year");
            }
        } else if (j >= 3 && j <= 5) {
            if (j == 3) {
                changeValues(1, "&#8377 10", "&#47 Day");
            } else if (j == 4) {
                changeValues(1, "&#8377 200", "&#47 Month");
            } else {
                changeValues(1, "&#8377 1000", "&#47 Year");
            }
        } else {
            if (j == 6) {
                changeValues(2, "&#8377 20", "&#47 Day");
            } else if (j == 7) {
                changeValues(2, "&#8377 500", "&#47 Month");
            } else {
                changeValues(2, "&#8377 3500", "&#47 Year");
            }
        }
    });
}
var purchaseButtons = document.getElementsByClassName("price-details");
var pricingHeader = document.getElementsByClassName("pricing-header");
var getPassBtn = document.getElementById("pass-button");
var selectedPlan;
function yourPlan(element, index) {
    purchaseButtons[index].style.visibility = "hidden";
    getPassBtn.style.visibility = "visible";
    selectedPlan = prices[index].innerHTML + durations[index].innerHTML;
    pricingHeader.innerHTML = "You have selected " + selectedPlan;
}

function showPlan(element) {
    document.getElementById("pricing").style.display = "none";
    alert("Your Plan is " + selectedPlan);

}