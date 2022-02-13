const IsInArrayLike = (_value : string, _array : Array<string>) => {
  if(_array.length > 0){
    let result = false;
    _array.forEach(i => {
      if(_value.toUpperCase().includes(i.toUpperCase())){
        result = true;
        return;
      }
    });
    return result;
  }
  return false;
}

export default IsInArrayLike;