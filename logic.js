const container = document.querySelector('.container');
const value = document.querySelector('#rangeValue');
const slider = document.querySelector('.rangeSlider');
const reset = document.querySelector('.resetbtn');
const blackBtn = document.querySelector('.black');
const colorBtn = document.querySelector('.color');
let cell;
let cellColor = document.querySelector(':root');
let color;
// Links the slider and the value together
value.innerHTML = slider.value;
//Changing color buttons
blackBtn.addEventListener("click",function(){
    color = 'black';
});
colorBtn.addEventListener("click",function(){
    color = 'color';
});
//The number of cells being made
function makeCell(numCell){
    for (let i=0;i < numCell;i++){
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
  
}
//Set property changes this (variable, new value)
//Structures the grid 
function makeGrid(numRow,numCol){
    container.style.setProperty('--numRow',numRow);
    container.style.setProperty('--numCol',numCol);
    for (let i=0;i<numCol;i++){
        makeCell(numRow);
    }
}

// FInal to start
function chooseSize(number){
    makeGrid(number,number);
}


//Sketch
container.addEventListener('mouseover',sketch); //This container is a function itself due to inside of it being a function that is a constant
function sketch(e){
    if (e.target.className === 'cell' && color == "black"){ //this sees if the location of the target mousover is at a specific cell class in the container
        e.target.classList.add("cellColor-black"); //The target cell has the classlist added of the cellColor 
    } else if (e.target.className === 'cell' && color == "color"){
        const randomR = Math.floor(Math.random() * 256) //Generates a random color
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
}

//Reset
reset.addEventListener('click',erase);
function erase(){
    while (container.firstChild){ //While the first child still exist which is a cell, the while function removes every cell under container
        container.removeChild(container.lastChild);
    }
    chooseSize(value.innerHTML); //Everytime we press the button the new value in the slider will be applied after being wiped out
}

//value slider
slider.addEventListener('input',function(e){
    squareSize = e.target.value;
    value.innerHTML = `${squareSize}`;
})

//function start
chooseSize(16);

