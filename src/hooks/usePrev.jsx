import { useEffect, useRef } from "react"

const usePrev=(state)=>{
    const ref=useRef();
    useEffect(()=>{
        ref.current=state;
    },[state])
    return ref.current;
}

export default usePrev;