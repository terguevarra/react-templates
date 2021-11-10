const Search = (_list, _searchKey) => _list.filter(obj => Object.keys(obj).some(key => obj[key] !== null && obj[key].toString().toLowerCase().includes(_searchKey.toLowerCase())));

export default Search;