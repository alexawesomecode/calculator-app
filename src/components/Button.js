
  import React from 'react';
  import PropTypes from 'prop-types';

    class Button extends React.Component {
    

  
  
    
      render() { 
    return (
        <div className="button" style={{backgroundColor: this.props.color}}>
      <h2>B{this.props.name} </h2>
        </div>
    )
      }
    }

Button.defaultProps = {
      
  name: 'O'
}
    Button.propTypes = {
  
      name: PropTypes.string.isRequired
    }

    export default Button;