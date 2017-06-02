import React, { Component } from 'react';
import Timer from './Timer';
import Button from './Button';
import { tick, resetTimer } from './actions';
import './Pomodoro.css';

const defaultWorkLength = 25 * 60;

class Pomodoro extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'stop',
      status: 'off',
      timeLeft: defaultWorkLength,
    };

    this.handleClickTimer = this.handleClickTimer.bind(this);
    this.handleClickResetTimer = this.handleClickResetTimer.bind(this);
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

  handleClickResetTimer() {
    this.setState(resetTimer);
  }

  render() {
    return (
      <div className="Pomodoro">
        <h2 className="Pomodoro-header">Start pomodoro</h2>
        <Timer
          timeLeft={this.state.timeLeft}
          onClick={this.handleClickTimer}
        />
        <h2 className="Pomodoro-mode">{this.state.mode}</h2>
        <Button
          label="Reset"
          className="Pomodoro-resetButton"
          onClick={this.handleClickResetTimer}
        />
      </div>
    );
  }
}

export default Pomodoro;
