let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay"); 
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode  buttons
for(let i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected"); 
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
    });
}
for(let i = 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
    //grab color  of clicked square
    let clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct"
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.background = clickedColor;
        } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again!"
        } 
    });
}
    reset()
}

function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    //change colors of square
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
            }
        }
    
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    //loop  through all squares
    for(let i = 0; squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}
function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
    //make an array
    let arr = []

    //repeat num times
    for(let i = 0; i < num; i++){
        arr.push(randomColor())
        //get random color and push arr
    }
    //return that array
    return arr;
}

 function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
 }