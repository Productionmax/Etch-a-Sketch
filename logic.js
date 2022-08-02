const container = document.querySelector('.container');
const value = document.querySelector('#rangeValue');
const slider = document.querySelector('.rangeSlider');
const reset = document.querySelector('.resetbtn');
let cell;

value.innerHTML = slider.value;
// slider.oninput = function(){
//     value.innerHTML = this.value;
//     number = value.innerHTML;
//     chooseSize(number);
// }


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
// function changeValue(){
//     chooseSize(16);
//     if (chooseSize !== 16){
//     slider.oninput = function (){
//         value.innerHTML = this.value;
//         chooseSize(this.value);
// }}
// }

function chooseSize(number){
    makeGrid(number,number);
}


//Sketch
container.addEventListener('mouseover',sketch); //This container is a function itself due to inside of it being a function that is a constant
function sketch(e){
    if (e.target.className === 'cell'){ //this sees if the location of the target mousover is at a specific cell class in the container
        e.target.style.backgroundColor = 'black'; //the target cell is getting blackened out
    }
}


//Reset
reset.addEventListener('click',erase);
function erase(){
    // window.location.reload();
    while (container.firstChild){
        container.removeChild(container.lastChild);
    }
    chooseSize(36);
}

//value
slider.addEventListener('input',function(e){
    squareSize = e.target.value;
    value.innerHTML = `${squareSize}`;
})

//function start
chooseSize(36);