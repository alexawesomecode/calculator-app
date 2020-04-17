
import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    color, name, wide, handleClick,
  } = props;
  const onChildClick = () => {
    handleClick(name);
  };
  if (wide === true) {
    return (
      <button type="button" className="button wide" style={{ backgroundColor: color }} onClick={onChildClick}>
        <h2>
          {name}
        </h2>
      </button>
    );
  }
  return (
    <button type="button" className="button" style={{ backgroundColor: color }} onClick={onChildClick}>
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
  handleClick: PropTypes.func.isRequired,


};

export default Button;
