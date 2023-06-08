/* It's the best idea to write your own JS in custom.js file. So if you want to write JS with your own use this file */
function sendWA() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let textInput = document.getElementById("text-input");
  let mobileNumber = 917090009770; //Enter your mobile number here

  if (name.value.trim() == "") {
    name.style.background = "lightpink";
    name.style.border = "4px solid red";
    alert("Please Enter your Name");
    return false;
  }

  let url =
    `https://wa.me/${mobileNumber}?text=` +
    "Name: " +
    name.value +
    "%0a" +
    "Email ID: " +
    email.value +
    "%0a" +
    "Message: " +
    textInput.value;

  window.open(url, "_blank").focus();
}
