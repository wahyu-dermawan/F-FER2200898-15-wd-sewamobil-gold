import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function CustomButton(props) {
  return (
    <button 
      className="custom-button" 
      style={{ 
        background: props.background, 
        fontSize: props.fontSize, 
        fontWeight: props.fontWeight, 
        borderRadius: props.borderRadius 
      }}
    >
      {props.children}
    </button>
  );
}

CustomButton.propTypes = {
  background: PropTypes.string, 
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  borderRadius: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CustomButton.defaultProps = {
  background: '#5CB85F',
  fontSize: '15px',
  fontWeight: 700,
  borderRadius: '5px'
};

export default CustomButton;
