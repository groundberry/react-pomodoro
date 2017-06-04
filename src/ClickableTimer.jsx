import React from 'react';
import PropTypes from 'prop-types';
import Time from './Time';
import './ClickableTimer.css';

export default function ClickableTimer(props) {
  return (
    <button className="ClickableTimer" onClick={props.onClick}>
      <Time time={props.timeLeft} />
    </button>
  );
}

ClickableTimer.propTypes = {
  timeLeft: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
