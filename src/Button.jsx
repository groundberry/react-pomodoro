import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button(props) {
  const label = props.label;

  return (
    <button className="Button" onClick={props.onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
