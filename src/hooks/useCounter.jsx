import { useState } from "react"

const useCounter=()=>{
    let [counter,setCounter]=useState(0);
    const increaseCount=()=>setCounter(p=>p+1);
    return {counter,increaseCount}
}
export default useCounter;

//1.each time the useCounter function is called
//  a new counter state is created---> due to this 
//  all the useState hook has its own indeipendent states.