
import { useEffect } from 'react';
import './App.css'
import useFetch from './hooks/useFetch'

function App() {
  const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/todos/1");
  if (loading) {
    return <h1>loading...</h1>
  } else {
    return (
      <>
        <div>{JSON.stringify(finalData)}</div>
      </>
    )
  }
}

export default App
