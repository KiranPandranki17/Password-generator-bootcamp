// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to get user input for password options
function getPasswordOptions() {
  // Prompt the user to enter the length of the password
  var passwordLength = parseInt(
    prompt(
      "Enter the length of the password that you want to create (Must be a number between 8 and 128 characters):"
    )
  );

  // Validate the user input for password length
  if (
    !(
      typeof passwordLength === "number" &&
      passwordLength >= 8 &&
      passwordLength <= 128
    )
  ) {
    alert("Password length must be a number between 8 and 128.");
    return;
  }

  // Confirm if the user wants to include different types of characters in the password
  var Lower = confirm("Do you want to include lowercase characters?");
  var Upper = confirm("Do you want to include uppercase characters?");
  var Numeric = confirm("Do you want to include numeric characters?");
  var Special = confirm("Do you want to include special characters?");

  // Validate if the user has selected at least one character type
  if (!Lower && !Upper && !Numeric && !Special) {
    alert("Atleast select one character type to generate password.");
    return;
  }

  // Concatenate selected character types based on user input
  // Initialize an empty string to store concatenated character sets based on user preferences

  var concat_character = "";

  // Check if the user wants to include lowercase characters
  if (Lower) {
    concat_character = concat_character.concat(lowerCasedCharacters); // If yes, concatenate the lowercase characters to the concat_character array
  }
  // Check if the user wants to include uppercase characters
  if (Upper) {
    concat_character = concat_character.concat(upperCasedCharacters); // If yes, concatenate the uppercase characters to the concat_character array
  }
  if (Numeric) {
    concat_character = concat_character.concat(numericCharacters);
  }
  if (Special) {
    concat_character = concat_character.concat(specialCharacters);
  }

  // Return the concatenated characters and password length
  return [concat_character, passwordLength];
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {

  var getPasswordOption = getPasswordOptions();
  var length = getPasswordOption[1];
  var characters = getPasswordOption[0];
  console.log(characters);
  var Password_characters = "";

  for (var i = 0; i < length; i++) {
    var random_character = getRandom(characters);
     Password_characters += random_character;
  }

  return Password_characters;
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
