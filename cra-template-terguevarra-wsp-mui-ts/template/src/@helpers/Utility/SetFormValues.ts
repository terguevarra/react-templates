const SetFormValues = (_inputs : any, _setValueCallback : (key : string, value: any, option : { shouldValidate : boolean }) => void) => {
  Object.entries(_inputs).forEach(([key, value]) => {
    _setValueCallback(key, value === null ? '' : value, { shouldValidate: true });
  });
}

export default SetFormValues