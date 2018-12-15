import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.checkGameState(e);
    this.setState({
      hidden: false,
    });
  }

  render() {
    const { hidden, row, column, mine, value } = this.props
    const view = hidden ? 'hidden' : 'visible';
    return (
      <div
        className={`box ${view}`}
        onClick={this.handleClick}
        row={row}
        column={column}
      >
        { !hidden && (mine ? 'X' : value) }
      </div>
    )
  }
}
// {mine ? 'X' : this.props.value}

export default Box;
