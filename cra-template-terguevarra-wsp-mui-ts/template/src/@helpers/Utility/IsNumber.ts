const IsNumber = (_number : number | string) => {
  if (typeof _number === 'number') {
    return _number - _number === 0;
  }

  if (typeof _number === 'string' && _number.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+_number) : isFinite(+_number);
  }

  return false;
}

export default IsNumber;