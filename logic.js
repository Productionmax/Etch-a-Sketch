const container = document.querySelector('.container');
const square = document.createElement('div');
let cell;
let target;

function makeCell(numCell){
    for (let i=0;i < numCell;i++){
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}
