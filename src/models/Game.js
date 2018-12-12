import { getRandomNumber } from '../helpers';

class Board {
  constructor() {
    this.grid = [];
    this.mines = 10;
    this.height = 10;
    this.width = 10;
  }

  plantMines() {
    const { mines, height, width, grid } = this;
    let counter = 0;

    while (counter < mines) {
      const column = getRandomNumber(0, width);
      const row = getRandomNumber(0, height);
      const box = grid[row][column];
      if (!box.mine) {
        box.mine = true;
        counter++
      }
    }
  }

  generate() {
    const { grid } = this;
    for (let row = 0; row < grid.length; row++) {
      for (let column = 0; column < grid[row].length; column++) {
        const box = grid[row][column];
        if (box.mine) {
          this.findBorder(box, row, column, grid).map(e => e.value++);
        }
      }
    }
  }
}


export default Board;
