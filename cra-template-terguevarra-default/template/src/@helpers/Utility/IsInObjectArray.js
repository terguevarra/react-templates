const IsInObjectArray = (_value, _property, _array) => {
    for (var i = 0; i < _array.length; i++) {
        if (_array[i][_property] === _value) {
            return true;
        }
    }
    return false;
}

export default IsInObjectArray;