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
}