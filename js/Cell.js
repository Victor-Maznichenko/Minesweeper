export let isGameOver = false;

class Cell {
    constructor(value) {
        this.setValue(value);
        this.visible = false;
        this.isFlag = false;
        this.isBomb = false;
    };

    setValue(value) {
        this.value = Number.isInteger(value) ? value : 0;
    };

    incrementValue() {
        this.value += 1;
    };

    setVisible() {
        if (this.isBomb) {
            isGameOver = true;
        } else if (this.isFlag) {
            return;
        }
        this.visible = true;
    }
}

export default Cell;