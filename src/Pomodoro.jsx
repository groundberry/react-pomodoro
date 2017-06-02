import React, { Component } from 'react';
import Timer from './Timer';
import Button from './Button';
import {
  tick,
  resetTimer,
  clickDecrease,
  clickIncrease,
} from './actions';
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
    this.handleClickDecrease = this.handleClickDecrease.bind(this);
    this.handleClickIncrease = this.handleClickIncrease.bind(this);
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

  handleClickDecrease() {
    this.setState(clickDecrease);
  }

  handleClickIncrease() {
    this.setState(clickIncrease);
  }

  render() {
    return (
      <div className="Pomodoro">
        <h2 className="Pomodoro-header">Start pomodoro</h2>
        <Timer
          timeLeft={this.state.timeLeft}
          onClick={this.handleClickTimer}
        />
        <h2 className="Pomodoro-mode">It is {this.state.mode} time</h2>
        <Button
          label="Reset"
          className="Pomodoro-resetButton"
          onClick={this.handleClickResetTimer}
        />
        <div className="Pomodoro-customise">
          <Button
            label="-"
            className="Pomodoro-decreaseWorkButton"
            onClick={this.handleClickDecrease}
          />
          <h2 className="Pomodoro-customiseWork">Increase pomodoro</h2>
          <Button
            label="+"
            className="Pomodoro-increaseWorkButton"
            onClick={this.handleClickIncrease}
          />
        </div>
      </div>
    );
  }
}

export default Pomodoro;
