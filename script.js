// Assignment code here
  var numArray = ['1','2','3','4','5','6','7','8','9','0']
  var upperArray = ['A','B','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var lowwerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var specialArray = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\',',']',',','^','_',',','{',',|','}','~','+']
  var password = ''
  password = Math.floor(Math.random() * 10)
  for (var i = 0; i < passwordLength;) 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var passwordLength = parseInt(prompt("How long would you like your password to be? (8-128 characters)"));
  if ((passwordLength >= 8) && (passwordLength <= 128)) {
    let includeUpper = window.confirm("Would you like to include uppercase characters?");
    let includeLower = window.confirm("Would you like to include lowercase characters?");
    let includeNumber = window.confirm("Would you like to include numerical characters?");
    let includeSpecial = window.confirm("Would you like to include special characters?");
    
    if ((!includeUpper) && (!includeLower) && (!includeNumber) && (!includeSpecial)){
      alert("Please select from the provided criteria.")
    }

    else{
      let characters = origin;
      includeUpper ? (characters += upperArray) :"";
      includeLower ? (characters += lowwerArray) : "";
      includeNumber ? (characters += numArray) : "";
      includeSpecial ? (characters += specialArray) : "";

    var generatePassword = (length, characters) => {
      let password = "";
      for (let i = 0; i < length; i++) {
        password += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      return password;
    }
    console.log(generatePassword);
    password.value = generatePassword(length, characters);
  }} else {
    window.alert("Password must be between 8 and 128 characters long!")
  };
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);