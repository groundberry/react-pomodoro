import React from 'react';
import PropTypes from 'prop-types';
import Time from './Time';
import './ClickableTimer.css';

export default function ClickableTimer(props) {
  return (
    <div className="ClickableTimer">
      <span className="ClickableTimer-leaf" />
      <button className="ClickableTimer-tomato" onClick={props.onClick}>
        <Time time={props.timeLeft} />
      </button>
    </div>
  );
}

ClickableTimer.propTypes = {
  timeLeft: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
