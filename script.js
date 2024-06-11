// just random colors for trail
const colors = ["red","blue","green","rgb(224, 32, 217)","#D9E020"];

// variable declaration for Elements
let btn = document.getElementById("btn");
let colorValue = document.querySelector(".color");

// button click event
btn.addEventListener("click",function(event){
    let randomValue =colors[getRandomValue()] ;

// change the background color
    document.body.style.backgroundColor = randomValue;
    
// Change the color value showed in the body    
    colorValue.textContent = randomValue;
});

// function for getting random value

function getRandomValue(){
    return Math.floor(Math.random()*colors.length);
}