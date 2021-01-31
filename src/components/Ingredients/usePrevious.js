function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

// Hook
function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}


const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const useExample = (apiOptions) => {

     const myPreviousState = usePrevious(apiOptions);
     const [data, updateData] = useState([]);
     useEffect(() => {
        if (myPreviousState && !_.isEqual(myPreviousState, apiOptions)) {
          updateData(apiOptions);
        }
     }, [apiOptions])
}
