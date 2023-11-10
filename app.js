console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);



//    EXCERCISE 1 
var userGuess = window.prompt("What Number Am I Thinknig Of???????")

var favoriteNumber = 22;
userGuess = parseInt(userGuess);

if (userGuess < favoriteNumber) {
  console.log("Too low");
}

else if (userGuess > favoriteNumber) {
  console.log("Too high");
} 

else {
  console.log("Congratulations You're Amazing!!!");
}

//    EXCERCISE 2

var birthMonth = window.prompt("What is your birth month?");

birthMonth = birthMonth.toLowerCase();



switch (birthMonth) {
  case "december":
  case "january":
  case "february":
      console.log("You were born in winter.");
      break;
  case "march":
  case "april":
  case "may":
      console.log("You were born in spring.");
      break;
  case "june":
  case "july":
  case "august":
      console.log("You were born in summer.");
      break;
  case "september":
  case "october":
  case "november":
      console.log("You were born in fall.");
      break;
  default:
      console.log("Invalid input. Please enter a valid month.");
}


let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "BK":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);