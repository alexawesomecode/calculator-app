import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {total: null, next: null, operation: null}
    this.handleClick = this.handleClick.bind(this)
  }

  
  handleClick(buttonName) {
    let result = Calculate(this.state, buttonName).currentOperation();
    console.log(result)
    this.setState(result)
    
  
    }
 
  render() {

  const displayData =  this.state.next !== '' ? this.state.next : this.state.total
    return (
      <div>
        
        <Display result={displayData} />
         <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    )

  }
  
}

export default App;
