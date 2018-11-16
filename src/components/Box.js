import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = props;
    // this.state = {
    //   mine : false,
    //   hidden : true,
    //   value : 0,
    // }
  }



  render() {
    return (
      <div className="box" onClick={this.props.handleClick}>
        <p>{this.state.mine ? 'M' : ""}</p>
      </div>
    )
  }
}

export default Box;
