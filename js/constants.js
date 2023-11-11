import Cell from './Cell.js';

export const canvas = document.getElementById('minesweeper');
export const canvasWidth = window.innerWidth * 0.7;
export const canvasHeight = window.innerWidth * 0.7 / 2;
export const countCols = 30;
export const countRows = 15;
export const countBombs = 55;
export const cellWidth = canvasWidth / countCols;
export const cellHeight = canvasHeight / countRows;
// export let isGameOver = false;

export const arrayCells = [];
for (let i = 0; i < countRows; i++) {
    arrayCells.push([]);
    for (let j = 0; j < countCols; j++) {
        arrayCells[i].push(new Cell(0));
    }
}
