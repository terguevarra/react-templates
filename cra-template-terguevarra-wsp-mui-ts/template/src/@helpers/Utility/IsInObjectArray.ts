const IsInObjectArray = (_value : any, _property : string, _array : Array<any>) => {
    for (var i = 0; i < _array.length; i++) {
        if (_array[i][_property] === _value) {
            return true;
        }
    }
    return false;
}

export default IsInObjectArray;