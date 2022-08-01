
// set variables and constants
const container = document.querySelector('#container');

function makeGrid (row, col) {
    if (row === undefined && col === undefined) { 
        row = 16;
        col = 16;
    }
    container.style.setProperty('--grid-row', row);
    container.style.setProperty('--grid-col', col);



    for (i = 0; i < (row * col); i++) {
        let cell = document.createElement('div');
        
        container.appendChild(cell).className = "grid-cell";

        cell.addEventListener('mouseover', function (e) {
            e.target.style.background = 'black';
        })
    };return

}; 

const resetGrid = document.querySelector('#clearPad');

 resetGrid.addEventListener('click', function() {
        return location.reload();
    });


const customGrid = document.querySelector('#customPad');

customGrid.addEventListener('click', () => {
    return makeGrid(row = parseInt(prompt("Enter Number")), col = row);
});












 