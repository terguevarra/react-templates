const GroupBy = (_list : Array<any>, _key : string) => {
  return _list.reduce((acc, val) => ({
    ...acc,
    [val[_key]]: [
      ...(_list.filter(i => i[_key] === val[_key]))
    ]
  }), {});
}

export default GroupBy;