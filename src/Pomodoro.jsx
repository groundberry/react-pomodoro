import React, { Component } from 'react';
import Timer from './Timer';
import { tick } from './actions';
import './Pomodoro.css';

const defaultWorkLength = 25 * 60;

class Pomodoro extends Component {
  constructor() {
    super();
    this.state = {
      status: 'off',
      timeLeft: defaultWorkLength,
    };

    this.handleClickTimer = this.handleClickTimer.bind(this);
  }

  handleClickTimer() {
    const { status } = this.state;

    if (status === 'off') {
      this.setState({
        status: 'on',
      });

      this.interval = setInterval(() => {
        this.setState(tick);
      }, 1000);
    } else if (status === 'on') {
      this.setState({
        status: 'off',
      });

      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div className="Pomodoro">
        <h2 className="Pomodoro-header">Start pomodoro</h2>
        <Timer timeLeft={this.state.timeLeft} onClick={this.handleClickTimer} />
      </div>
    );
  }
}

export default Pomodoro;
