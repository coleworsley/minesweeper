import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  constructor() {
    super();
    this.state = {
      mine : false,
      hidden : true,
      value : 0,
    }
  }
  render() {
    return (
      <div className="box">
      </div>
    )
  }
}

export default Box;
