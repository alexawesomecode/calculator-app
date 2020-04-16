const Big = require('big.js');

let result;
export const operate = (one, two, operation) => {
  if (operation === '-') {
    result = Big(one).minus(Big(two));
    return result.toString();
  }
  if (operation === '/') {
    result = Big(one).div(Big(two));
    return result.toString();
  }
  if (operation === '+') {
    result = Big(one).plus(Big(two));
    return result.toString();
  }
  if (operation === 'x') {
    result = Big(one).mul(Big(two));
    return result.toString();
  }

  if (operation === '%') {
    result = Big(two) / 100;
    return result.toString();
  }

  return result;
};

export default operate;
