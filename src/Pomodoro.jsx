import React, { Component } from 'react';
import './Pomodoro.css';

class Pomodoro extends Component {
  constructor() {
    super();
    this.state = {
      status: 'off',
    };
  }

  render() {
    return (
      <div className="Pomodoro">
        <div className="Pomodoro-header">
          <h2>Start pomodoro</h2>
        </div>
      </div>
    );
  }
}

export default Pomodoro;
