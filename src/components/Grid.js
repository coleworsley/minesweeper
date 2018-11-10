import React, { Component } from 'react';
import BoxModel from '../models/BoxModel';
import Box from './Box';
import { getRandomNumber } from '../helpers';

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
    };
    this.plantMines = this.plantMines.bind(this);
    this.generateComponents = this.renderComponents.bind(this);
  }

  componentDidMount() {
    const { rows, columns } = this.props;
    const grid = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push(new BoxModel());
      }
      grid.push(row);
    }

    this.setState({ grid: this.plantMines(grid) });
  }

  renderComponents() {
    return this.state.grid.map((row, i) => (
      <div className="row" key={i}>
        {row.map((box, j) => <Box row={i} column={j} key={[i,j]}/>)}
      </div>
    ))
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

    return grid;
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
