function useScrollTo(_ref){

  const scrollTo = () => {
    if(_ref?.current){
      window.scrollTo({
        top: _ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  return {
    scrollTo
  }
}

export default useScrollTo;