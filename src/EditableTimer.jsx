import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Time from './Time';
import './EditableTimer.css';

export default function EditableTimer(props) {
  return (
    <div className="EditableTimer">
      <div className="EditableTimer-customise">
        <Button
          label="-"
          onClick={props.onClickDecrease}
        />
        <h2>
          {props.label}
          <Time time={props.time} />
        </h2>
        <Button
          label="+"
          onClick={props.onClickIncrease}
        />
      </div>
    </div>
  );
}

EditableTimer.propTypes = {
  label: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  onClickDecrease: PropTypes.func.isRequired,
  onClickIncrease: PropTypes.func.isRequired,
};
