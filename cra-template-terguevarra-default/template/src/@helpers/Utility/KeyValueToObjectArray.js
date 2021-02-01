const KeyValueToObjectArray = (_arr) => {
    if(_arr.length > 0){
        let tmpList = [];
        _arr.forEach(data => {
            let tmpObj = {};
            data.Value.forEach(val => {
                tmpObj[val.Key] = val.Value;
            });
            tmpList.push(tmpObj);
        });
        return tmpList;
    }
    return [];
}

export default KeyValueToObjectArray;