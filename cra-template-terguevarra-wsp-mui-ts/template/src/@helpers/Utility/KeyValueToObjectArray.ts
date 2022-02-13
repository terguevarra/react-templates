const KeyValueToObjectArray = (_arr : Array<any>) => {
    if(_arr.length > 0){
        let tmpList : Array<any> = [];
        _arr.forEach(data => {
            let tmpObj : any = {};
            data.Value.forEach((val : any) => {
                tmpObj[val.Key] = val.Value;
            });
            tmpList.push(tmpObj);
        });
        return tmpList;
    }
    return [];
}

export default KeyValueToObjectArray;