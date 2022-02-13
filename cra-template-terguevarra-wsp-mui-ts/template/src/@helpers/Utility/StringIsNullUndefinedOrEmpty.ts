const StringIsNullUndefinedOrEmpty = (_val : any) => {
    if (_val == null || _val === undefined) {
        return true;
    } else {
        if (_val) {
            return _val.toString().trim().length === 0;
        } else {
            return true;
        }
    }
}

export default StringIsNullUndefinedOrEmpty;