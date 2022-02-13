const ListToTree = (_list : Array<any>, _idName : string, _parentIdName : string, _childrenPropertyName : string = 'children') => {
    let map : any = {}, node, roots = [], i;
    for (i = 0; i < _list.length; i += 1) {
        map[_list[i][_idName]] = i;
        _list[i][_childrenPropertyName] = [];
    }
    for (i = 0; i < _list.length; i += 1) {
        node = _list[i];
        if (node[_parentIdName] !== 0) {
            _list[map[node[_parentIdName]]][_childrenPropertyName].push(node);
        } else {
            roots.push(node);
        }
    }
    return roots;
}

export default ListToTree;