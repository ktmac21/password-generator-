// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var lengthInput = prompt("Please enter password length between 8 and 128");

  if (lengthInput < 8 || lengthInput > 128) {
    alert("Please enter a valid number between 8 and 128! Please click Generate Password.");
    return //* stops running function *//
  }

  var confirmUpper = confirm("Include uppercase?");
  var confirmLower = confirm("Include lowercase?");
  var confirmNumb = confirm("Include numbers?");
  var confirmSymb = confirm("Include symbols?");

  if (!confirmUpper && !confirmLower && !confirmNumb && !confirmSymb) {
    alert("You must pick at least one critera! Please click Generate Password.");
    return
  }

  var finalPassword = "";
  var possibleCharacters = "";
  if (confirmUpper === true) {
    possibleCharacters += "QWERTYUIOPASDFGHJKLZXCVBNM"
    finalPassword += randomUpperCase();
  }

  if (confirmLower === true) {
    possibleCharacters += "qwertyuiopasdfghjklzxcvbnm"
    finalPassword += randomLowerCase();
  }

  if (confirmNumb === true) {
    possibleCharacters += "123456789"
    finalPassword += randomNumber();
  }

  if (confirmSymb === true) {
    possibleCharacters += "!@#$%^&*?><{}|"
    finalPassword += randomSymbol();
  }
  console.log(finalPassword)

  for (var i = finalPassword.length; i < lengthInput; i++) {
    finalPassword += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }
  console.log(finalPassword)
  return finalPassword
};


// Functions

function randomSymbol() {
  symbols = "!@#$%^&*?><{}|";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function randomNumber() {
  numbers = "123456789";
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function randomUpperCase() {
  upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function randomLowerCase() {
  lowerCase = "qwertyuiopasdfghjklzxcvbnm"
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);