import React from 'react';
import PropTypes from 'prop-types';
import Time from './Time';
import './Timer.css';

export default function Timer(props) {
  return (
    <button className="Timer" onClick={props.onClick}>
      <Time time={props.timeLeft} />
    </button>
  );
}

Timer.propTypes = {
  timeLeft: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
