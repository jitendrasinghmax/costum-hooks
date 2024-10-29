
import { useEffect, useRef, useState } from 'react';
import './App.css'
import useFetch from './hooks/useFetch'
import usePrev from './hooks/usePrev';

function App() {
  const [state,setState]=useState(0);
  const prev=usePrev(state);
  
  return(
    <>
    <h1>current state {state}</h1>
    <button onClick={()=>setState(p=>p+1)}>increase state</button>
    <h1>prev state is {prev}</h1>
    </>
  )
}

export default App
