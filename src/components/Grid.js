import React, { Component } from 'react';
import BoxModel from '../models/BoxModel';
import Box from './Box';
import './Grid.css';
import { getRandomNumber } from '../helpers';

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
    };
    this.plantMines = this.plantMines.bind(this);
    this.renderComponents = this.renderComponents.bind(this);
    this.findBorder = this.findBorder.bind(this);
    this.setValues = this.setValues.bind(this);
    this.checkGameState = this.checkGameState.bind(this);
  }

  componentDidMount() {
    const { rows, columns } = this.props;
    const grid = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push(new BoxModel(i, j));
      }
      grid.push(row);
    }

    this.plantMines(grid);
    this.setValues(grid);
    this.setState({ grid });
  }


  plantMines(grid) {
    const { mines } = this.props;
    const y = grid.length
    const x = grid[0].length
    let counter = 0;

    while (counter < mines) {
      const column = getRandomNumber(0, x);
      const row = getRandomNumber(0, y);
      const box = grid[row][column];
      if (!box.mine) {
        box.mine = true;
        counter++
      }
    }
  }

  setValues(grid) {
    for (let row = 0; row < grid.length; row++) {

      for (let column = 0; column < grid[row].length; column++) {
        const box = grid[row][column];
        if (box.mine) {
          this.findBorder(box, row, column, grid).map(e => e.value++);

        }
      }
    }
  }

  findBorder(box, row, column, grid) {
    const border = [];

    // Above
    if (row > 0) {
      border.push(grid[row - 1][column]);
    }
    // Below
    if (row < grid.length - 1) {
      border.push(grid[row + 1][column]);
    }
    // Left
    if (column > 0) {
      border.push(grid[row][column - 1]);
    }
    // Right
    if (column < grid[row].length - 1) {
      border.push(grid[row][column + 1]);
    }
    // Upper Left
    if (row > 0 && column > 0) {
      border.push(grid[row - 1][column - 1]);
    }
    // Upper Right
    if (row > 0 && column < grid[row].length - 1) {
      border.push(grid[row - 1][column + 1]);
    }
    // Lower Left
    if (row < grid.length - 1 && column > 0) {
      border.push(grid[row + 1][column - 1]);
    }
    // Lower Right
    if ((row < grid.length - 1) && column < grid[row].length - 1) {
      border.push(grid[row + 1][column + 1]);
    }
    console.log(border);
    return border;
  }


  checkGameState(e) {
    const row = parseInt(e.target.getAttribute('row'));
    const column = parseInt(e.target.getAttribute('column'));
    const { grid } = this.state;
    const box = grid[row][column];
    console.log('value', box.value);
    if (box.mine) {
      console.log('Game Over');
    }

    if (box.value === 0) {
      console.log('Reveal Multiple')
    } else {
      console.log('Reveal One');
      box.hidden = false;
    }
  }

  renderComponents() {
    return this.state.grid.map((row, i) => (
      <div className="row" key={i}>
        {row.map((box, j) => <Box {...box} checkGameState={this.checkGameState} key={[i,j]}/>)}
      </div>
    ))
  }

  render() {
    return (
      <div className="grid">
        {this.renderComponents()}
      </div>
    )
  }
}

export default Grid;
