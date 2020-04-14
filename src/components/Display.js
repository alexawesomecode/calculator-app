import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div className="display">
      <h2>
        {result}
      </h2>
    </div>
  );
};

Display.defaultProps = {

  result: 'O',
};

Display.propTypes = {

  result: PropTypes.string,
};

export default Display;
