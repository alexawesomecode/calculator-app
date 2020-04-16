
import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { color, name, wide, handleClick } = props;
  const onChildClick = () => {
    console.log(name)    
    handleClick(name)
  }
  if (wide === true) {
    return (
      <button className="button wide" style={{ backgroundColor: color }}  onClick={onChildClick}>
        <h2>
          {name}
        </h2>
      </button>
    );
  }
  return (
    <button className="button" style={{ backgroundColor: color }} onClick={onChildClick}>
      <h2>
        {name}
      </h2>
    </button>
  );
};

Button.defaultProps = {

  color: 'orange',
  wide: false,
};

Button.propTypes = {

  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,


};

export default Button;
