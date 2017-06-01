import React from 'react';
import PropTypes from 'prop-types';
import { leftPad } from './utils';
import './Timer.css';

export default function Timer(props) {
  const minutes = Math.floor(props.timeLeft / 60);
  const seconds = leftPad(props.timeLeft % 60);

  return (
    <button className="Timer" onClick={props.onClick}>
      {minutes}:{seconds}
    </button>
  );
}

Timer.propTypes = {
  timeLeft: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
