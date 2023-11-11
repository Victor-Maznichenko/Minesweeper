import { canvas, arrayCells, cellHeight, cellWidth, canvasWidth, canvasHeight, countRows, countCols } from './constants.js';
import { isGameOver } from './Cell.js'

let context = canvas.getContext("2d");
const BombIco = new Image();
BombIco.src = "../images/bomb.png";


canvas.width = canvasWidth;
canvas.height = canvasHeight;

function drawBombs() { }

function drawRect(indexRow, indexCol) {
    context.strokeStyle = "#626262";
    context.strokeRect(indexCol * cellWidth, indexRow * cellHeight, cellWidth, cellHeight);
}

function fillRect(indexRow, indexCol) {
    context.fillRect(indexCol * cellWidth, indexRow * cellHeight, cellWidth, cellHeight);
}

function drawCells() {
    for (let i = 0; i < countRows; i++) {
        for (let j = 0; j < countCols; j++) {
            context.fillStyle = "#040e14";
            fillRect(i, j)
            drawRect(i, j);
            if (arrayCells[i][j].isBomb) {
                const bombWidth = cellWidth * 0.7;
                const bombHeight = cellHeight * 0.7;
                context.fillStyle = "#be3a25";
                context.fillRect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
                context.drawImage(BombIco, j * cellWidth + bombWidth / 4, i * cellHeight + bombHeight / 4, bombWidth, bombHeight);
            }
            if (!arrayCells[i][j].isBomb && arrayCells[i][j].value !== 0) {
                context.strokeStyle = "white";
                context.strokeText(arrayCells[i][j].value.toString(), j * cellWidth + cellWidth / 2, i * cellHeight + cellHeight / 2);
            }
            if (!arrayCells[i][j].visible && !isGameOver) {
                context.fillStyle = "#9ba3ac";
                fillRect(i, j)
            };

        }
    }
}

function paint() {
    BombIco.onload{
        drawCells();
    }
}

export default paint;