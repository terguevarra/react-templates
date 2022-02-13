const ObjectArrayUnique = (_list : Array<any>, _uniqueField : string, _returnField : string) => {
    let unique : any = {};
    let distinct : Array<any> = [];

    for (let i in _list){
        if(unique[_list[i][_uniqueField]] === undefined){
            distinct.push(_list[i][_returnField]);
        }
        unique[_list[i][_uniqueField]] = 0;
    }
    return distinct;
}

export default ObjectArrayUnique;