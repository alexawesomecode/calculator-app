
import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;

  return (
    <div className="button">
      <h2>
        {name}
      </h2>
    </div>
  );
};


Button.propTypes = {

  name: PropTypes.string.isRequired,

};

export default Button;
