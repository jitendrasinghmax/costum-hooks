import { useState } from "react"

const useCounter=()=>{
    let [counter,setCounter]=useState(0);
    const increaseCount=()=>setCounter(p=>p+1);
    return {counter,increaseCount}
}
export default useCounter;