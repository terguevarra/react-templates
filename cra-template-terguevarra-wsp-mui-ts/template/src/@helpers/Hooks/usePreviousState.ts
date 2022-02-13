import { useRef, useEffect } from 'react';

function usePreviousState(_state : any){
  const ref = useRef();
  useEffect(() => {
    ref.current = _state;
  });
  return ref.current;
}

export default usePreviousState;