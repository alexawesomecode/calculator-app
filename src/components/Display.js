import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { value } = props;
  return (
    <div className="display">
      <h2>
        {value}
      </h2>
    </div>
  );
};

Display.defaultProps = {

  value: 'O',
};

Display.propTypes = {

  value: PropTypes.string,
};

export default Display;
