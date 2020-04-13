
import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { color, name } = props;

  return (
    <div className="button" style={{ backgroundColor: color }}>
      <h2>
        {name}
      </h2>
    </div>
  );
};


Button.propTypes = {

  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
