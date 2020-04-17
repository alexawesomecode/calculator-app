import { Operation } from './operate';

const Calculate = (data, button) => {
  let { total, next } = data;
  const { operation } = data;
  let result;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let prevNext;
  let prevOperation;

  const lastOperation = oper => {
    result = Operation(total, next, oper);
    total = result;

    return result;
  };

  const buttonName = button;
  const currentOperation = () => {
    prevOperation = operation;

    if (numbers.includes(Number(buttonName))) {
      if (next === '0' && buttonName === '0') {
        return { next };
      }
      if (next === '0' && buttonName !== '0') {
        prevNext = [];
        prevNext.push(buttonName);
        next = prevNext.join('');
        return { next };
      }
      prevNext = [next];
      prevNext.push(buttonName);
      next = prevNext.join('');
      return { next };
    }

    if (buttonName === '+') {
      if ((total === null) && (next === '')) return { next: '' };

      prevOperation = (next !== '') ? prevOperation : buttonName;
      prevOperation = (operation === '=') ? buttonName : prevOperation;

      if (total !== null) {
        if ((next === '') && (prevOperation === '+')) { return ({ total, next: '', operation: '+' }); }

        result = lastOperation(prevOperation);
        prevOperation = '+';
        return ({ total: result, next: '', operation: '+' });
      }


      return ({ total: next, next: '', operation: '+' });
    }

    if (buttonName === '-') {
      if ((total === null) && (next === '')) return { next: '' };

      prevOperation = (next !== '') ? prevOperation : buttonName;
      prevOperation = (operation === '=') ? buttonName : prevOperation;
      if (total !== null) {
        if ((next === '') && (prevOperation === '-')) { return ({ total, next: '', operation: '-' }); }
        result = lastOperation(prevOperation);
        prevOperation = '-';
        return ({ total: result, next: '', operation: '-' });
      }

      return ({ total: next, next: '', operation: '-' });
    }
    if (buttonName === 'x') {
      if ((total === null) && (next === '')) return { next: '' };
      prevOperation = (next !== '') ? prevOperation : buttonName;
      prevOperation = (operation === '=') ? buttonName : prevOperation;
      if (total !== null) {
        if ((next === '') && (prevOperation === 'x')) { return ({ total, next: '', operation: 'x' }); }


        result = lastOperation(prevOperation);
        prevOperation = 'x';
        return ({ total: result, next: '', operation: 'x' });
      }


      return ({ total: next, next: '', operation: 'x' });
    }
    if (buttonName === '%') {
      if ((total === null) && (next === '')) return { next };

      prevOperation = (next !== '') ? prevOperation : buttonName;
      prevOperation = (operation === '=') ? buttonName : prevOperation;
      result = (next === '') ? (Number(total) / 100).toString() / 100 : (Number(next) / 100).toString();

      if (total !== null) {
        if ((next === '') && (prevOperation === '%')) { return ({ total: result, next: '', operation: '%' }); }

        prevOperation = '%';
        return ({ total: result, next: '', operation: '%' });
      }

      return ({ total: result, next: '', operation: '%' });
    }
    if (buttonName === '/') {
      if ((total === null) && (next === '')) return { next: '' };

      prevOperation = (next !== '') ? prevOperation : buttonName;
      prevOperation = (operation === '=') ? buttonName : prevOperation;
      if (total !== null) {
        if ((next === '') && (prevOperation === '/')) { return ({ total, next: '', operation: '/' }); }
        result = lastOperation(prevOperation);
        prevOperation = '/';
        return ({ total: result, next: '', operation: '/' });
      }

      return ({ total: next, next: '', operation: '/' });
    }

    if (buttonName === '.') {
      if (next.indexOf('.') !== -1) return { next };
      prevNext = next === '' ? ['0'] : [next];
      prevNext.push('.');
      next = prevNext.join('');
      return { next };
    }
    if (buttonName === '=') {
      prevOperation = (next !== '') ? prevOperation : buttonName;


      if (total !== null) {
        if ((next === '') && (prevOperation === '=')) { return ({ total, next: '', operation: '=' }); }

        result = lastOperation(prevOperation);

        prevOperation = '=';
        return ({ total: result, next: '', operation: '=' });
      }
    }
    if (buttonName === 'AC') {
      return ({ total: null, next: '', operation: '' });
    }
    if (buttonName === '+/-') {
      if ((total === null) && (next === '')) return { next: '' };

      prevOperation = (next !== '') ? prevOperation : buttonName;
      prevOperation = (operation === '=') ? buttonName : prevOperation;

      const absNext = String((next.indexOf('-') !== -1) ? Math.abs(Number(next)) : -Math.abs(Number(next)));

      if (total !== null) {
        if ((next === '') && (prevOperation === '+/-')) {
          total = String((total.indexOf('-') !== -1) ? Math.abs(Number(total)) : -Math.abs(Number(total)));
          return ({ total, next: '', operation: '+/-' });
        }

        return ({ next: absNext });
      }
      return ({ next: absNext });
    }


    return total;
  };

  return { currentOperation };
};


export default Calculate;
