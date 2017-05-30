import React, { Component } from 'react';
import Timer from './Timer';
import { clickTimer } from './actions';
import './Pomodoro.css';

class Pomodoro extends Component {
  constructor() {
    super();
    this.state = {
      status: 'off',
    };

    this.handleClickTimer = this.handleClickTimer.bind(this);
  }

  handleClickTimer() {
    this.setState(clickTimer);
  }

  render() {
    return (
      <div className="Pomodoro">
        <h2 className="Pomodoro-header">Start pomodoro</h2>
        <Timer onClick={this.handleClickTimer} />
      </div>
    );
  }
}

export default Pomodoro;
