const SetFormValues = (_inputs, _setValueCallback) => {
  Object.entries(_inputs).forEach(([key, value]) => {
    _setValueCallback(key, value === null ? '' : value, { shouldValidate: true });
  });
}

export default SetFormValues