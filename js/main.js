import { arrayCells, canvas, countBombs, countRows, countCols, cellWidth, cellHeight } from './constants.js';
import paint from './paint.js';


function fillCells() {
    // add bombs and values
    for (let i = 0; i < countBombs; i++) {
        const indexRow = Math.floor((Math.random() * 1000) % countRows);
        const indexCol = Math.floor((Math.random() * 1000) % countCols);

        arrayCells[indexRow][indexCol].isBomb = true;

        for (let k = indexRow - 1; k <= indexRow + 1; k++) {
            for (let l = indexCol - 1; l <= indexCol + 1; l++) {
                if (arrayCells[k] !== undefined && arrayCells[k][l] !== undefined && !(arrayCells[k][l].isBomb)) {
                    arrayCells[k][l].incrementValue();
                }
            }
        }
    }
}

canvas.addEventListener('click', (e) => {
    const indexRow = Math.trunc(e.offsetY / cellHeight);
    const indexCol = Math.trunc(e.offsetX / cellWidth);
    const currentCell = arrayCells[indexRow][indexCol];
    currentCell.setVisible();
    paint();
})



function init() {
    fillCells();
    paint();
}

init();
