//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var donutScore= 0;
var burgerScore = 0;
var sushiScore = 0;
var tacoScore = 0;

const resultDisplay = document.getElementById("");






//First Question
var morning = document.getElementById("morning");
var afternoon = document.getElementById("afternoon");
var evening = document.getElementById("evening");
var midnight = document.getElementById("midnight");

morningAnswer.addEventListener("click", donutResult);
afternoonAnswer.addEventListener("click", burgerResult);
eveningAnswer.addEventListener("click", sushiResult);
midnightAnswer.addEVentListener("click", tacoResult);


//Second Question
var sweet = document.getElementById("sweet");
var salty = document.getElementById("salty");
var spicy = document.getElementById("spicy");
var tangy = document.getElementById("tangy");

sweetAnswer.addEventListener("click", donutResult);
saltyAnswer.addEventListener("click", burgerResult);
spicyAnswer.addEventListener("click", sushiResult);
tangyAnswer.addEVentListener("click", tacoResult);


//Third Question
var mansion = document.getElementById("mansion");
var apartment = document.getElementById("apartment");
var vacationHome = document.getElementById("vacationHome");
var house = document.getElementById("house");

mansionAnswer.addEventListener("click", donutResult);
apartmentAnswer.addEventListener("click", burgerResult);
vacationHomeAnswer.addEventListener("click", sushiResult);
houseAnswer.addEVentListener("click", tacoResult);


// Callback Score Functions:

function donutResult() {
  questionCount += 1;
  donutScore += 1;
  alert("Getting Started!");
  
  if (questionCount >= 3) {
    updateResult();
  }
}


function burgerResult() {  
  questionCount += 1;
  burgerScore += 1;
  alert("Almost There!");
  
  if (questionCount >= 3) {
    updateResult();
  }
}


function sushiResult() {  
  questionCount += 1;
  sushiScore += 1;
  alert("Getting your results in...");
  
  if (questionCount >= 3) {
    updateResult();
  }
}


function tacoResult() {  
  questionCount += 1;
  tacoScore += 1;
  
  if (questionCount >= 3) {
    updateResult();
  }
}

// Final Result Function

function updateResult() {
  
}






















