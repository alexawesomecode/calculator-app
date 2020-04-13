import React from 'react';
import Display from './Display';
import Button from './Button';
import ButtonPanel from './ButtonPanel';
  
  
  class App extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
         <Display value="OOO"/>
          <Button name="boton" color="white" wide={true}/>
          <ButtonPanel />
        </div>
      );
    }
  }
  
 export default App;