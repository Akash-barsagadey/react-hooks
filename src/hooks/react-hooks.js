//useState
const [value, setValue] = useState(defaultValue)

//useMemo
//https://blog.hackages.io/react-hooks-usecallback-and-usememo-8d5bb2b67231
//useMemo calls its function and returns the result
useMemo(() => {
  doSomething()
}, [dependencies])

//useEffect
useEffect(() => {
  doSomething()
}, [dependencies])

//useCallback
//useCallback returns its function when the dependencies change
useCallback(() => {
  doSomethingOnce()
}, [dependencies])
