import React from 'react';
import Display from './Display';
import Button from './Button';
import ButtonPanel from './ButtonPanel';


function App() {
  return (
    <div>

      <Display value="OOO" />
      <Button name="boton" color="white" wide />
      <ButtonPanel />
    </div>
  );
}

export default App;
