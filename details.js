
var employeeBlock = document.getElementById("employee");
var vehicleBlock = document.getElementById("vehicles");
var pricingBlock = document.getElementById("pricing");
var msgId;
var msg;
var passId = 1;
function showMessage(input, message, type) {

  msg.innerHTML = message;

  input.className = type ? "success" : "error";
  return type;

}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, "", true);
}

function hasValue(input, message) {
  if (input.value.trim() === "") {
    return showError(input, message);
  }
  return showSuccess(input);
}

function hasValueSelected(input, requiredMsg) {
  const msg = document.getElementById("employee-header");
  if (input[0].checked || input[1].checked) {
    msg.innerHTML = "";
    return true
  } else {
    msg.innerHTML = requiredMsg;
    return false;
  }
}

function validateEmail(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}
var password;
function validatePassword(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  password = input.value.trim();
  if (!passwordRegex.test(password)) {
    return showError(input, invalidMsg);
  }
  return true;
}
function strength(password) {
  if (password.length === 0) {
    document.getElementById("msg").innerHTML = "";
    return;
  }

  var matchedCase = new Array();
  matchedCase.push("[$@$!%*#?&]"); // Special Charector
  matchedCase.push("[A-Z]");      // Uppercase Alpabates
  matchedCase.push("[0-9]");      // Numbers
  matchedCase.push("[a-z]");     // Lowercase Alphabates


  var ctr = 0;
  for (var i = 0; i < matchedCase.length; i++) {
    if (new RegExp(matchedCase[i]).test(password)) {
      ctr++;
    }
  }

  var color = "";
  var strength = "";
  switch (ctr) {
    
    case 3:
      strength = "Medium";
      color = "orange";
      break;
    case 4:
      strength = "Strong";
      color = "green";
      break;
    default:
      strength = "Very Weak";
      color = "red";
            break;
  }
  document.getElementById("password-strength").innerHTML = strength;
  document.getElementById("msg").style.borderColor = color;
}
function passwordMatched(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  const cpass = input.value.trim();
  if (cpass != password) {
    return showError(input, invalidMsg);
  }
  return true;
}

function validateContact(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  const contactRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const contact = input.value.trim();
  if (!contactRegex.test(contact)) {
    return showError(input, invalidMsg);
  }
  return true;
}
const form = document.getElementById("employee");
const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "please enter your email";
const EMAIL_INVALID = "Please enter correct email";
const PASSWORD_REQUIRED = "please enter your password";
const INVALID_PASSWORD = "Please enter another password";
const CONFIRM_PASSWORD = "please confirm your password";
const UNMATCHED_PASSWORD = "Password does not match";
const CONTACT_REQUIRED = "please enter your phone number";
const INVALID_CONTACT = "Please enter valid phone number";

var employeeName;
document.getElementById("employee-submit-name").addEventListener("click", function (event) {
  event.preventDefault();
  let nameValid = hasValue(form.employeename, NAME_REQUIRED);
  if (nameValid) {
    employeeName = form.employeename.value.trim();
    hideElements(0);
    visibleElements(1, "Hii "+employeeName+" can i know your gender");
  }
});

document.getElementById("employee-submit-gender").addEventListener("click", function (event) {
  event.preventDefault();
  let genderValid = hasValueSelected(document.getElementsByName("gender"), "Hii " + employeeName + " can i know your gender");
  if (genderValid) {
    hideElements(1);
    visibleElements(2, EMAIL_REQUIRED);
  }
});

document.getElementById("employee-submit-email").addEventListener("click", function (event) {
  event.preventDefault();
  let emailValid = validateEmail(form.email, EMAIL_REQUIRED, EMAIL_INVALID);
  if (emailValid) {
    hideElements(2);
    visibleElements(3, PASSWORD_REQUIRED);
  }
});
document.getElementById("employee-submit-password").addEventListener("click", function (event) {
  event.preventDefault();
  let passwordValid = validatePassword(form.password, PASSWORD_REQUIRED, INVALID_PASSWORD);
  if (passwordValid) {
    hideElements(3);
    visibleElements(4, CONFIRM_PASSWORD);
  }
});
document.getElementById("employee-submit-confirm").addEventListener("click", function (event) {
  event.preventDefault();
  let passwordMatch = passwordMatched(form.confirmPassword, CONFIRM_PASSWORD, UNMATCHED_PASSWORD);
  if (passwordMatch) {
    hideElements(4);
    visibleElements(5, CONTACT_REQUIRED);
  }
});
document.getElementById("employee-submit-contact").addEventListener("click", function (event) {
  event.preventDefault();
  let contactValid = validateContact(form.contact, CONTACT_REQUIRED, INVALID_CONTACT);
  if (contactValid) {
    hideElements(5);
    employeeBlock.style.display = "none";
    alert("Your Pass Id is " + passId);
    passId++;
    msgId = "vehicle-header";
    msg = document.getElementById(msgId);
    vehicleBlock.style.display = "block";
    vehicleBlock.scrollIntoView();
    msg.innerHTML = "Click next to enter vehicle details";
  }
});

var inputFields = document.getElementsByClassName("employee-form-control");

var buttons = document.getElementsByClassName("employee-submit-btn");
function newPass() {
  msgId = "employee-header";
  msg = document.getElementById(msgId);
  msg.innerHTML = "Click next to enter your details";
  employeeBlock.style.display = "block";
  for (var i = 0; i < inputFields.length; i++) {
    inputFields[i].style.display = "none";
  }
  for (var i = 0; i < vehicleInputs.length; i++) {
    vehicleInputs[i].style.display = "none";
  }
  for (var i = 0; i < priceStructures.length; i++) {
    priceStructures[i].style.display = "none";
  }
  employeeBlock.scrollIntoView();
}
var nextBtn = document.getElementById("employee-next-btn");
nextBtn.addEventListener("click", function () {
  nextBtn.style.display = "none";
  visibleElements(0, NAME_REQUIRED);
});

function visibleElements(index, message) {
  inputFields[index].style.display = "block";
  buttons[index].style.visibility = "visible";
  msg.innerHTML = message;
}

function hideElements(index) {
  inputFields[index].style.display = "none";
  buttons[index].style.visibility = "hidden";
}

var vehicleMsg = document.getElementById("vehicle-header");
var selectedType;
function validType(input, requiredMsg) {
  var index = input.selectedIndex;
  var option = input.options;
  if (option[index].value != -1) {
    selectedType = option[index].text;
    vehicleMsg.innerHTML = "";
    return true
  } else {
    vehicleMsg.innerHTML = requiredMsg;
    return false;
  }

}
const VEHICLE_MAKE_REQUIRED = "Please enter your vehicle make";
const VEHICLE_MODEL_REQUIRED = "Please enter your vehicle model";
const VEHICLE_TYPE_REQUIRED = "Which vehicle do you have";
const VEHICLE_NUMBER_REQUIRED = "Please enter your vehicle number";
const EMPLOYEE_ID_REQUIRED = "Please enter your generated id";
const VEHICLE_IDENTIFICATION_REQUIRED = "Please enter your vehicle identification";


var vehicleNextBtn = document.getElementById("vehicle-next-btn");

vehicleNextBtn.addEventListener("click", function () {
  vehicleNextBtn.style.visibility = "hidden";
  visibleVehicleElements(0, VEHICLE_MAKE_REQUIRED);
});

var vehicleForm = document.getElementById("vehicles");

document.getElementById("vehicle-submit-vehicleMake").addEventListener("click", function (event) {
  event.preventDefault();
  let makeValid = hasValue(vehicleForm.vehicleMake, VEHICLE_MAKE_REQUIRED);
  if (makeValid) {
    hideVehicleElements(0);
    visibleVehicleElements(1, VEHICLE_MODEL_REQUIRED);
  }
});

document.getElementById("vehicle-submit-vehicleModel").addEventListener("click", function (event) {
  event.preventDefault();
  let modelValid = hasValue(vehicleForm.vehicleModel, VEHICLE_MODEL_REQUIRED);
  if (modelValid) {
    hideVehicleElements(1);
    visibleVehicleElements(2, VEHICLE_TYPE_REQUIRED);
  }
});

document.getElementById("vehicle-submit-VehicleType").addEventListener("click", function (event) {
  event.preventDefault();
  let typeValid = validType(document.getElementById("type"), VEHICLE_TYPE_REQUIRED);
  if (typeValid) {
    hideVehicleElements(2);
    visibleVehicleElements(3, VEHICLE_NUMBER_REQUIRED);
  }
});

document.getElementById("vehicle-submit-vehicleNumber").addEventListener("click", function (event) {
  event.preventDefault();
  let numberValid = hasValue(vehicleForm.vehicleNumber, VEHICLE_NUMBER_REQUIRED);
  if (numberValid) {
    hideVehicleElements(3);
    visibleVehicleElements(4, EMPLOYEE_ID_REQUIRED);
  }
});

document.getElementById("vehicle-submit-employeeId").addEventListener("click", function (event) {
  event.preventDefault();
  let idValid = hasValue(vehicleForm.employeeId, EMPLOYEE_ID_REQUIRED);
  if (idValid) {
    hideVehicleElements(4);
    visibleVehicleElements(5, VEHICLE_IDENTIFICATION_REQUIRED);
    document.getElementsByClassName("vehicle-form-sub-heading").visibility = "visible";
  }
});

var priceStructures = document.getElementsByClassName("price-details");
var pricingBlock = document.getElementById("pricing");

document.getElementById("vehicle-submit-identification").addEventListener("click", function (event) {
  event.preventDefault();
  let identifationValid = hasValue(vehicleForm.identification, VEHICLE_IDENTIFICATION_REQUIRED);
  if (identifationValid) {
    hideVehicleElements(5);
    alert("Vechile Type selected " + selectedType);
    vehicleBlock.style.display = "none";
    if (selectedType == "Four Wheeler") {
      priceStructures[2].style.display = "block";
    } else if (selectedType == "Cycle") {
      priceStructures[0].style.display = "block";
    } else if (selectedType == "MotorCycle") {
      priceStructures[1].style.display = "block";
    }
    pricingBlock.style.display = "block";
    pricingBlock.scrollIntoView();
  }
});

var vehicleInputs = document.getElementsByClassName("vehicle-form-control");
var vechileButtons = document.getElementsByClassName("vehicle-submit-btn");

function hideVehicleElements(index) {
  vehicleInputs[index].style.display = "none";
  vechileButtons[index].style.visibility = "hidden";
}

function visibleVehicleElements(index, message) {
  vehicleInputs[index].style.display = "block";
  vechileButtons[index].style.visibility = "visible";
  msg.innerHTML = message;
}






