import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Time from './Time';
import './EditableTimer.css';

export default function EditableTimer(props) {
  return (
    <div className="EditableTimer">
      <h2 className="EditableTimer-header">
        {props.label}
      </h2>
      <Button
        label="-"
        onClick={props.onClickDecrease}
      />
      <span className="EditableTimer-time">
        <Time time={props.time} />
      </span>
      <Button
        label="+"
        onClick={props.onClickIncrease}
      />
    </div>
  );
}

EditableTimer.propTypes = {
  label: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  onClickDecrease: PropTypes.func.isRequired,
  onClickIncrease: PropTypes.func.isRequired,
};
