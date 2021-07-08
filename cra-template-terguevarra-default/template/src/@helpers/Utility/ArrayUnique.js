const ArrayUnique = (_arr) => {
    let result = [];
    for (let i = 0; i < _arr.length; i++) {
        if (result.indexOf(_arr[i]) === -1) {
            result.push(_arr[i]);
        }
    }
    return result;
}

export default ArrayUnique;