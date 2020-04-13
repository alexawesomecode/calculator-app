import React from 'react';
import PropTypes from 'prop-types'
class Display extends React.Component {
  
  
    render() { 
  return (
    <div className="display">
    <h2>{this.props.value} </h2>
      </div>
  )
    }
  }

  Display.defaultProps = {
    
    value: 'O'
  }

  Display.propTypes = {

    value: PropTypes.string.isRequired
  }

  export default Display;