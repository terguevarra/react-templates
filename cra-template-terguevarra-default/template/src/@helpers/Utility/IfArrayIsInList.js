const IfArrayIsInList = (_array, _list) => {
    for (var i = 0; i < _array.length; i++) {
        if (_list.indexOf(_array[i]) > -1) {
            return true;
        }
    }
    return false;
}

export default IfArrayIsInList;