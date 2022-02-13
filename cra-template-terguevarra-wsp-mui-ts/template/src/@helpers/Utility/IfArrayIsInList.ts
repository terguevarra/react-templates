const IfArrayIsInList = (_array : Array<any>, _list : Array<any>) => {
    for (var i = 0; i < _array.length; i++) {
        if (_list.indexOf(_array[i]) > -1) {
            return true;
        }
    }
    return false;
}

export default IfArrayIsInList;