const container = document.querySelector('.container');
const value = document.querySelector('#rangeValue');
const slider = document.querySelector('.rangeSlider');
let cell;
let target;
slider.oninput = function (){
    value.innerHTML = this.value;
}

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

function chooseSize(numGrid){
    slider.oninput = function (){
        value.innerHTML = this.value;
        numGrid = value.innerHTML;
        makeGrid(numGrid,numGrid);
    }
    
    
}

chooseSize();