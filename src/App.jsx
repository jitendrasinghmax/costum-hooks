import './App.css'
import useCounter from './hooks/useCounter'

function App() {
  const {counter,increaseCount}=useCounter();
  return (
    <>
      <button onClick={increaseCount}>increase{counter}</button>
    </>
  )
}

export default App
