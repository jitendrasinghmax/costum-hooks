```javascript
const component=()=>{
    let ref=useRef(inital value);->>>ref value is initialized only in the first
                                     first render, in re-render ref is not reinitilized.
                                     ref value can only be changed by using ref.current
    let i="jitendra singh";------->>>i is initilized in every render or rerender.
    return(
        <>
            <div>component</div>
        </>
    )
}`
react first returns the useEffect is triggered
------------------------------------------------------------------------------------------
sequence at which the programs runs->>>>>

```jsx
const component=()=>{

    console.log("control is in the body of function");

    useEffect(()=>{
        console.log("control is in the useEffect);
    },[])

    console.log("control is in the before the return);
    return(
        <>
            <div>hi this is jitendra singh</div>
        </>
    )
}`

**output in the console**

controle is in the body of the function
control is in the before the return
control is in the useEffect

**from the above output it is clear that useEffect is excuted at the end.**
----------------------------------------------------------------------------------
