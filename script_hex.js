
// Array for creating color hexadecimal 6 digit value
const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A","B","C","D","E","F"];

// Declartion or Getting the value of HTML Elements
let btn = document.getElementById("btn");
let color = document.querySelector(".color");

// Action for butten click
btn.addEventListener("click",function(){
    let random = "#";
    for(let i = 0; i<6;i++){
       random += numberArray[getRandomValue()];
       document.body.style.backgroundColor = random;
       color.textContent =random;
       
    }
});

// Function for Generating random value According to Array
function getRandomValue(){
    return Math.floor(Math.random()*numberArray.length);
}