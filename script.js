// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





function generatePassword() {

  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var symbols = "!@#$%^&*";
  var passWordArr = [];
  var passWordOutPut = "";
  var randomNumberSelection;
  var charTypeSelection;

  // prompt sequence 
  var passWordLength = prompt("How many characters would you like your password to be? (please chose between 8-128.");

  var lowerCase = prompt("would you like lower case Characters in your password? y or n");
  var upperCase = prompt("would you like Upper case letters in your password? y or n");
  var numberCase = prompt("would you like numbers in your password? y or n");
  var symbolCase = prompt("would you like Symbols in your password? y or n");

  // if else statements

  if (lowerCase.toLowerCase() === "y") {
    passWordArr.push("lowerCase");
  }
  if (upperCase.toLowerCase() === "y") {
    passWordArr.push("upperCase");
  }
  if (numberCase.toLowerCase() === "y") {
    passWordArr.push("numberCase");
  }
  if (symbolCase.toLowerCase() === "y") {
    passWordArr.push("symbolCase");
  }
  if (passWordLength >= 8 && passWordLength <= 128) {
    for (var i = 0; i < passWordLength; i++) {
      charTypeSelection = Math.floor(Math.random() * passWordArr.length);


      if (passWordArr[charTypeSelection] === "lowerCase") {
        randomNumberSelection = Math.floor(Math.random() * lowerCaseCharacters.length);
        passWordOutPut = passWordOutPut + lowerCaseCharacters[randomNumberSelection]
      }

      if (passWordArr[charTypeSelection] === "upperCase") {
        randomNumberSelection = Math.floor(Math.random() * upperCaseCharacters.length);
        passWordOutPut = passWordOutPut + upperCaseCharacters[randomNumberSelection]
      }

      if (passWordArr[charTypeSelection] === "numberCase") {
        randomNumberSelection = Math.floor(Math.random() * numbers.length);
        passWordOutPut = passWordOutPut + numbers[randomNumberSelection]
      }
      if (passWordArr[charTypeSelection] === "symbolCase") {
        randomNumberSelection = Math.floor(Math.random() * symbols.length);
        passWordOutPut = passWordOutPut + symbols[randomNumberSelection]
      }
      // console.log(passWordArr[charTypeSelection])
      // console.log(charTypeSelection)
    }
    alert("Your new password is:  " + passWordOutPut);
    return passWordOutPut;

  }

  else {
    alert("Please enter a number between 8 and 128!");
    location.reload();
  }


}

