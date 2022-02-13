const Search = (_list : Array<any>, _searchKey : string) => _list.filter(obj => Object.keys(obj).some(key => obj[key] !== null && obj[key].toString().toLowerCase().includes(_searchKey.toLowerCase())));

export default Search;