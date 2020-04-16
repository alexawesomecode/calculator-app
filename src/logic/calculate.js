import operate from './operate'

const Calculate = (data, button) => {
  let { total, next, operation } = data;
    let  result;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let prevNext;
  let prevOperation;


  const concatNumbers = arr => arr.reduce((acc, curr) => [acc, curr].join(''), '');

  const lastOperation = oper => {
    
    result = operate(total, next, oper);
    total = result;

    return result;
  };

  const buttonName = button;
  const currentOperation = () => {
    
    prevOperation = operation;
    
    if (numbers.includes(parseInt(buttonName))) {
      prevNext = [next];
      prevNext.push(buttonName)
      next = prevNext.join("")
      return {next: next}

    }

    if (buttonName === '+') {
      if ((total === null) && (next === '')) return

      console.log('PREVOUS', prevOperation)  
      prevOperation = (next !== '') ? prevOperation : buttonName;
      prevOperation = (operation == '=') ? buttonName : prevOperation
     
      if (total !== null) {
        if ((next == '') && (prevOperation == '+')) { return ({total:total, next:'', operation:'+'}) }
       else { 
         result = lastOperation(prevOperation);
        prevOperation = '+';
        return ({total: result, next: '', operation: '+'})
      }
    }
        else {
          
          return ({total:next, next:'', operation:'+'})
        }
    }

    if (buttonName === '-') {
      if ((total === null) && (next === '')) return

      prevOperation = (next !== '') ? prevOperation : buttonName;
      prevOperation = (operation == '=') ? buttonName : prevOperation
      if (total !== null) {
        if ((next == '') && (prevOperation == '-')) { return ({total:total, next:'', operation:'-'}) }
       else { result = lastOperation(prevOperation);
        prevOperation = '-';
        return ({total: result, next: '', operation: '-'})
      }
    }
        else {
          return ({total:next, next:'', operation:'-'})
        }
    }
    if (buttonName === 'x') {
      
      if ((total === null) && (next === '')) return
      prevOperation = (next !== '') ? prevOperation : buttonName;
      prevOperation = (operation == '=') ? buttonName : prevOperation
      if (total !== null) {
        if ((next == '') && (prevOperation == 'x')) { return ({total:total, next:'', operation:'x'}) }
      
      else { 
        result = lastOperation(prevOperation);
        prevOperation = 'x';
        console.log('inside x', total, 'next', next, prevOperation)
        return ({total: result, next: '', operation: 'x'})
      }
      }
        else {
          
          return ({total:next, next:'', operation:'x'})
        }
    }
    if (buttonName === '%') {
      if ((total === null) && (next === '')) return

      prevOperation = (next !== '') ? prevOperation : buttonName;
      prevOperation = (operation == '=') ? buttonName : prevOperation
      result = (next === '') ? (parseInt(total) / 100).toString() / 100 : (parseInt(next) / 100).toString()
      console.log(result)
      if (total !== null) {
        if ((next == '') && (prevOperation == '%')) { return ({total:result, next:'', operation:'%'}) }
       else { 
        prevOperation = '%';
        return ({total: result, next: '', operation: '%'})
      }
    }
        else {
          return ({total:result, next:'', operation:'%'})
        }
    }
    if (buttonName === '/') {
      if ((total === null) && (next === '')) return

      prevOperation = (next !== '') ? prevOperation : buttonName;
      prevOperation = (operation == '=') ? buttonName : prevOperation
      if (total !== null) {
        if ((next == '') && (prevOperation == '/')) { return ({total:total, next:'', operation:'/'}) }
       else { result = lastOperation(prevOperation);
        prevOperation = '/';
        return ({total: result, next: '', operation: '/'})
      }
    }
        else {
          return ({total:next, next: '', operation:'/'})
        }
    }

    if (buttonName === '.') {
           
      if (next.indexOf('.') !== -1) return {next:next}
      prevNext =  next === '' ? ['0'] : [next]
      prevNext.push(".")
      next = prevNext.join("")
      return {next: next}

    }
    if (buttonName === '=') {

      prevOperation = (next !== '') ? prevOperation : buttonName;
      
      
      if (total !== null) {
        if ((next == '') && (prevOperation == '=')) { return ({total:total, next:'', operation:'='}) }
       else { 
         result = lastOperation(prevOperation);
         console.log('result', result)
        prevOperation = '=';
        return ({total: result, next: '', operation: '='})
      }
    }   
      


    } 
    if (buttonName === 'AC') {
      
      
      
      return ({total: null, next: '', operation: ''})


    } 
    if (buttonName === '+/-') {
      if ((total === null) && (next === '')) return

      prevOperation = (next !== '') ? prevOperation : buttonName;
      prevOperation = (operation == '=') ? buttonName : prevOperation

      let absNext = String((next.indexOf('-') !== -1) ? Math.abs(parseInt(next)) : -Math.abs(parseInt(next)))
      
      if (total !== null) {

        if ((next == '') && (prevOperation == '+/-')) { 
          
          total = String((total.indexOf('-') !== -1) ? Math.abs(parseInt(total)) : -Math.abs(parseInt(total)))
          return ({total: total, next:'', operation:'+/-'})
           }
       else { 
        return ({next: absNext})
      }
    }
    return ({next: absNext})
       
    }

    

    return total;
  };

  return { lastOperation, concatNumbers, currentOperation };
};


export default Calculate;
