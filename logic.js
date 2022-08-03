const container = document.querySelector('.container');
const value = document.querySelector('#rangeValue');
const slider = document.querySelector('.rangeSlider');
const reset = document.querySelector('.resetbtn');
const blackBtn = document.querySelector('.black');
const colorBtn = document.querySelector('.color');
let cell;
let cellColor = document.querySelector('.cellColor');
// Links the slider and the value together
value.innerHTML = slider.value;
// Changing color buttons
blackBtn.addEventListener("click",function(){
    cellColor.style.setProperty = ('--cellColor',"black");
});
// The number of cells being made
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
    if (e.target.className === 'cell'){ //this sees if the location of the target mousover is at a specific cell class in the container
            e.target.classList.add("cellColor"); //The target cell has the classlist added of the cellColor 
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
//coloroptions

//function start
chooseSize(16);