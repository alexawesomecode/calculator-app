const operate = require('./operate.js');
const calculate = (data, button) => {
  let { total } = data;
  let prevOperation; let input; let
    result;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const concatNumbers = arr => arr.reduce((acc, curr) => [acc, curr].join(''), '');

  const lastOperation = oper => {
    result = operate(total, concatNumbers(input), oper);
    total = result;

    return result;
  };

  const buttonName = button;
  const currentOperation = () => {
    if (numbers.includes(buttonName)) {
      input.push(buttonName);
    }

    if (buttonName === '+') {
      prevOperation = (typeof prevOperation === 'string') ? prevOperation : buttonName;
      result = lastOperation(prevOperation);
      total = result;
      input = [];
      prevOperation = '+';
      return total;
    }

    if (buttonName === '-') {
      prevOperation = (typeof prevOperation === 'string') ? prevOperation : buttonName;
      result = lastOperation(prevOperation);
      total = result;
      input = [];
      prevOperation = '-';
      return total;
    }
    if (buttonName === 'x') {
      prevOperation = (typeof prevOperation === 'string') ? prevOperation : buttonName;
      result = lastOperation(prevOperation);
      total = result;
      input = [];
      prevOperation = 'x';
      return total;
    }
    if (buttonName === '%') {
      prevOperation = (typeof prevOperation === 'string') ? prevOperation : buttonName;
      result = lastOperation(prevOperation);
      total = result;
      input = [];
      prevOperation = '%';
      return total;
    }
    if (buttonName === '/') {
      prevOperation = (typeof prevOperation === 'string') ? prevOperation : buttonName;
      result = lastOperation(prevOperation);
      total = result;
      input = [];
      prevOperation = '/';
      return total;
    }
    if (buttonName === '=') return lastOperation(prevOperation);

    return total;
  };

  return { lastOperation, concatNumbers, currentOperation };
};


export default calculate;
