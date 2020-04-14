
import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { color, name, wide } = props;

  if (wide === true) {
    return (
      <div className="button wide" style={{ backgroundColor: color }}>
        <h2>
          {name}
        </h2>
      </div>
    );
  }
  return (
    <div className="button" style={{ backgroundColor: color }}>
      <h2>
        {name}
      </h2>
    </div>
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
