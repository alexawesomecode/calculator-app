
  
  import React from 'react';
  import Button from './Button'
  class ButtonPanel extends React.Component {
  
    
    render() { 
  return (
    <div className="panel">
      <div className="group-1">
       <Button name="AC" />
      <Button name="plus-minus" />
      <Button name="percent" />
      <Button name="division" />
      </div>
     
          <div className="group-2">
      <Button name="7" /> 
      <Button name="8" /> 
      <Button name="9" /> 
      <Button name="X" /> 
      
      </div>
  
        <div className="group-3">
          <Button name="4" />
           <Button name="5" />
           <Button name="6" />
            <Button name="minus" />

      </div>
      <div className="group-4">
          <Button name="1" />
           <Button name="2" />
           <Button name="3" />
            <Button name="plus" />

      </div>
      <div className="group-5">
          <Button name="0" />
           <Button name="dot" />
           <Button name="equal" />
            

      </div>

      </div>
  )
    }
  }
  
  export default ButtonPanel;