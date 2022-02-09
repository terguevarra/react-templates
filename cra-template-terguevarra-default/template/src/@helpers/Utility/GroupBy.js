const GroupBy = (_list, _key) => {
  return _list.reduce((acc, val) => ({
    ...acc,
    [val[_key]]: [
      ...(_list.filter(i => i[_key] === val[_key]))
    ]
  }), {});
}

export default GroupBy;