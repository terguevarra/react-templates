const ObjectArrayUnique = (_list, _uniqueField, _returnField) => {
    let unique = {};
    let distinct = [];

    for (let i in _list){
        if(unique[_list[i][_uniqueField]] === undefined){
            distinct.push(_list[i][_returnField]);
        }
        unique[_list[i][_uniqueField]] = 0;
    }
    return distinct;
}

export default ObjectArrayUnique;