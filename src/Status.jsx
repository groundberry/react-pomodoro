import React from 'react';
import PropTypes from 'prop-types';
import './Status.css';

export default function Status(props) {
  const { status } = props;

  if (status === 'work') {
    return (
      <h2 className="Status">It is time to work</h2>
    );
  }

  if (status === 'stoppedWork') {
    return (
      <h2 className="Status">Work paused</h2>
    );
  }

  if (status === 'break') {
    return (
      <h2 className="Status">Time for a break!</h2>
    );
  }

  if (status === 'stoppedBreak') {
    return (
      <h2 className="Status">Break paused</h2>
    );
  }
}

Status.propTypes = {
  status: PropTypes.string.isRequired,
};
