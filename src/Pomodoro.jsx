import React, { Component } from 'react';
import Timer from './Timer';
import Button from './Button';
import {
  tick,
  resetTimer,
  clickDecreaseWorkTime,
  clickIncreaseWorkTime,
  clickDecreaseBreakTime,
  clickIncreaseBreakTime,
} from './actions';
import './Pomodoro.css';

const defaultWorkTime = 25 * 60;
const defaultBreakTime = 5 * 60;

class Pomodoro extends Component {
  constructor() {
    super();

    this.state = {
      status: 'stoppedWork',
      workTime: defaultWorkTime,
      breakTime: defaultBreakTime,
      timeLeft: defaultWorkTime,
    };

    this.handleClickTimer = this.handleClickTimer.bind(this);
    this.handleClickResetTimer = this.handleClickResetTimer.bind(this);
    this.handleClickDecreaseWorkTime = this.handleClickDecreaseWorkTime.bind(this);
    this.handleClickIncreaseWorkTime = this.handleClickIncreaseWorkTime.bind(this);
    this.handleClickDecreaseBreakTime = this.handleClickDecreaseBreakTime.bind(this);
    this.handleClickIncreaseBreakTime = this.handleClickIncreaseBreakTime.bind(this);

    setInterval(() => {
      this.setState(tick);
    }, 1000);
  }

  handleClickTimer() {
    const { status } = this.state;

    if (status === 'work') {
      this.setState({
        status: 'stoppedWork',
      });
    } else if (status === 'stoppedWork') {
      this.setState({
        status: 'work',
      });
    } else if (status === 'break') {
      this.setState({
        status: 'stoppedBreak',
      });
    } else if (status === 'stoppedBreak') {
      this.setState({
        status: 'break',
      });
    }
  }

  handleClickResetTimer() {
    this.setState(resetTimer);
  }

  handleClickDecreaseWorkTime() {
    this.setState(clickDecreaseWorkTime);
  }

  handleClickIncreaseWorkTime() {
    this.setState(clickIncreaseWorkTime);
  }

  handleClickDecreaseBreakTime() {
    this.setState(clickDecreaseBreakTime);
  }

  handleClickIncreaseBreakTime() {
    this.setState(clickIncreaseBreakTime);
  }

  render() {
    const { status, workTime, breakTime, timeLeft } = this.state;

    return (
      <div className="Pomodoro">
        <Timer
          timeLeft={timeLeft}
          onClick={this.handleClickTimer}
        />
        <h2 className="Pomodoro-mode">It is {status} time</h2>
        <Button
          label="Reset"
          className="Pomodoro-resetButton"
          onClick={this.handleClickResetTimer}
        />
        <div className="Pomodoro-customise">
          <Button
            label="-"
            className="Pomodoro-decreaseWorkButton"
            onClick={this.handleClickDecreaseWorkTime}
          />
          <h2 className="Pomodoro-customiseWork">Session time: {workTime / 60}</h2>
          <Button
            label="+"
            className="Pomodoro-increaseWorkButton"
            onClick={this.handleClickIncreaseWorkTime}
          />
        </div>
        <div className="Pomodoro-customise">
          <Button
            label="-"
            className="Pomodoro-decreaseWorkButton"
            onClick={this.handleClickDecreaseBreakTime}
          />
          <h2 className="Pomodoro-customiseWork">Break time: {breakTime / 60}</h2>
          <Button
            label="+"
            className="Pomodoro-increaseWorkButton"
            onClick={this.handleClickIncreaseBreakTime}
          />
        </div>
      </div>
    );
  }
}

export default Pomodoro;
