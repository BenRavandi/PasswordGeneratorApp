// Assignment Code
var generateBtn = document.querySelector("#generate");

// Set global variables here
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "0123456789";
var specialChar = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
  "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
var passwordLength = 0;

// This function runs the application code after being called
function generatePassword() {

  passwordLength = prompt("Choose between 8-128 characters for your password");

  // Set criteria for password length
  if (!passwordLength) {
    alert("Value is required:\n --------> Try again and choose between 8-128 characters <---------");
    return generatePassword();

  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("You must input a number between 8-128 characters:\n --------> Try again please <--------");
    return generatePassword();

  } else {
    alert("Your password is " + passwordLength + " characters long\n ------> Choose at least one criteria from the following screens <------");

    var lowerCase = confirm("Do you want to have lowercase letters in your password?");
    var upperCase = confirm("How about having uppercase letters in your password?");
    var number = confirm("Do you want to include numbers in your password?");
    var specChar = confirm("Do you want your password contain any special characters?");
  };

  // Set local variables here
  // Set empty string variable to hold upcoming added characters 
  var possiblePassword = "";

  // Set all the possible conditions into a loop -----> both "for loop" and "while loop" can be used <------
  for (var i = 0; i < passwordLength;) {

    if (!lowerCase && !upperCase && !number && !specChar) {
      alert("At least one character type should be selected\n ------> Start All Over Again <-------");
      return generatePassword();

    } else {

      // Check to see if the condition is true then loop through a random character,
      // push it to empty string variable and keep incrementing until the condition returns false
      if (lowerCase === true && i < passwordLength) {
        var randomLowerCase = lowerCaseChar[Math.floor(Math.random() * 26)]
        possiblePassword += randomLowerCase;
        i++;
      };

      if (upperCase === true && i < passwordLength) {
        var randomUpperCase = upperCaseChar[Math.floor(Math.random() * 26)]
        possiblePassword += randomUpperCase;
        i++;
      };

      if (number === true && i < passwordLength) {
        var radnomNumber = numericChar[Math.floor(Math.random() * 10)]
        possiblePassword += radnomNumber;
        i++;
      };

      if (specChar === true && i < passwordLength) {
        var randomSpeChar = specialChar[Math.floor(Math.random() * 32)]
        possiblePassword += randomSpeChar;
        i++;
      };

    };

  };

  return possiblePassword;

};

// Write password to the #password input
function writePassword() {

  // Call the function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

