import IsNumber from './IsNumber';

const IsOdd = (_number : number) => {
  const n = Math.abs(_number);

  if(!IsNumber(n)) {
    throw new TypeError('Expected a number');
  }

  if(!Number.isInteger(n)){
    throw new Error('Expected an integer');
  }

  if(!Number.isSafeInteger(n)){
    throw new Error('Value exceeds maximum safe integer');
  }

  return (n % 2) === 1;
}

export default IsOdd;