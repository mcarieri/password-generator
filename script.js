// Assignment code here
var numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var upperArray = ['A', 'B', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowwerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\',', ']', ',', '^', '_', ',', '{', ',|', '}', '~', '+']

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = ''
  let characters = [];
  var passwordLength = parseInt(prompt("How long would you like your password to be? (8-128 characters)"));
  if ((passwordLength >= 8) && (passwordLength <= 128)) {
    let includeUpper = window.confirm("Would you like to include uppercase characters?");
    let includeLower = window.confirm("Would you like to include lowercase characters?");
    let includeNumber = window.confirm("Would you like to include numerical characters?");
    let includeSpecial = window.confirm("Would you like to include special characters?");

    if ((!includeUpper) && (!includeLower) && (!includeNumber) && (!includeSpecial)) {
      alert("Please select from the provided criteria.")
    } else {
      includeUpper ? (characters = characters.concat(upperArray)) : "";
      includeLower ? (characters = characters.concat(lowwerArray)) : "";
      includeNumber ? (characters = characters.concat(numArray)) : "";
      includeSpecial ? (characters = characters.concat(specialArray)) : "";
      password = generatePassword(passwordLength, characters, password);
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
  } else {
    window.alert("Password must be between 8 and 128 characters long!")
  };
}

var generatePassword = (length, characters, password) => {
  for (let i = 0; i < length; i++){
    password = password.concat(characters[Math.floor(Math.random() * characters.length)]) 
  } 
  console.log(password)
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);