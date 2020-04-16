import operate from './operate'

const Calculate = (data, button) => {
  let { total, next, operation } = data;
  let prevOperation;  let
    result;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let prevNext;
  const concatNumbers = arr => arr.reduce((acc, curr) => [acc, curr].join(''), '');

  const lastOperation = oper => {
    console.log(total, 'next: ', next, oper)
    result = operate(total, next, oper);
    total = result;

    return result;
  };

  const buttonName = button;
  const currentOperation = () => {
    
    if (numbers.includes(parseInt(buttonName))) {
      prevNext = [next];
      prevNext.push(buttonName)
      next = prevNext.join("")
      return {next: next}

    }

    if (buttonName === '+') {
      
      prevOperation = (typeof prevOperation === 'string') ? prevOperation : buttonName;
      
      if (total !== null) {
        if ((next == '') && (prevOperation == '+')) { return ({total:total, next:'', operation:'+'}) }
       else { result = lastOperation(prevOperation);
        prevOperation = '+';
        return ({total: result, next: '', operation: '+'})
      }
    }
        else {
          return ({total:next, next:'', operation:'+'})
        }
    }

    if (buttonName === '-') {
      prevOperation = (typeof prevOperation === 'string') ? prevOperation : buttonName;
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
      prevOperation = (typeof prevOperation === 'string') ? prevOperation : buttonName;
      if (total !== null) {
        if ((next == '') && (prevOperation == 'x')) { return ({total:total, next:'', operation:'x'}) }
       else { 
         console.log('inside x', total, 'next', next)
         result = lastOperation(prevOperation);
        prevOperation = 'x';
        return ({total: result, next: '', operation: 'x'})
      }
    }
        else {
          return ({total:next, next:'', operation:'x'})
        }
    }
    if (buttonName === '%') {
      prevOperation = (typeof prevOperation === 'string') ? prevOperation : buttonName;
      if (total !== null) {
        if ((next == '') && (prevOperation == '%')) { return ({total:total, next:'', operation:'%'}) }
       else { result = lastOperation(prevOperation);
        prevOperation = '%';
        return ({total: result, next: '', operation: '%'})
      }
    }
        else {
          return ({total:next, next:'', operation:'%'})
        }
    }
    if (buttonName === '/') {
      prevOperation = (typeof prevOperation === 'string') ? prevOperation : buttonName;
      if (total !== null) {
        if ((next == '') && (prevOperation == '/')) { return ({total:total, next:'', operation:'/'}) }
       else { result = lastOperation(prevOperation);
        prevOperation = '/';
        return ({total: result, next: '', operation: '/'})
      }
    }
        else {
          return ({total:next, next: '0', operation:'/'})
        }
    }

    if (buttonName === '.') {
           
      if (next.indexOf('.') !== -1) return {next:next}
      prevNext = [next];
      prevNext.push(".")
      next = prevNext.join("")
      return {next: next}

    }
    if (buttonName === '=') {
      
      result = lastOperation(operation);
      console.log('re', result)
      return ({total: result, next: '', operation: '='})


    } 
    if (buttonName === 'AC') {
      
      
      return ({total: '', next: '', operation: ''})


    } 
    if (buttonName === '+/-') {



      console.log(next)
      let absNext = String((next.indexOf('-') !== -1) ? Math.abs(parseInt(next)) : -Math.abs(parseInt(next)))


      prevOperation = (typeof prevOperation === 'string') ? prevOperation : buttonName;
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
