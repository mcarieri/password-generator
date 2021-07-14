// Assignment code here
function generatePassword() {
  var passwordLength = parseInt(prompt("How long would you like your password to be? (8-128 characters)"));
  console.log(passwordLength)
  var numArray = ['1','2','3','4','5','6','7','8','9','0']
  var upperArray = ['A','B','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var lowwerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var specialArray = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\',',']',',','^','_',',','{',',|','}','~','+']
  var password = ''
  password = Math.floor(Math.random() * 10)
  for (var i = 0; i < passwordLength;)
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


