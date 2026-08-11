import { useState } from 'react'    // to import use state hook
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// hooks are used for ui updation
// A Hook is a special React function that lets functional components use React features such as state and lifecycle behavior.
//they help in updating a same value at 5 palces in ui
// Suppose you want a counter.

// Without state:

// let count = 0;

// React won't update the screen when count changes.

function App() {

  let [counter, setCounter] = useState(15)
  // setcounter is a function which updatee this variable everywhere in page it present
 
  // let counter = 15   // it doenst refecct counter updation in ui

  const addValue = () => {
    // console.log("clicked", counter);
    // counter = counter + 1
    // setCounter(counter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
// Suppose counter is currently 0.
// When this function runs, React does not immediately update the state after each setCounter(). Instead, it batches them together.
// because all four lines are reading the same old value of counter (0).

// So React finally updates the state to 1, not 4.
// IF WE WRITE AS COUNTER=1 IT TREATS ALL AS PACKAGE SO WE  INTRODUCE CALLABACK
// Here, React passes the latest state value to each callback.
// "I know state updates may be queued, so I'll give you the most recent value available. Calculate the next state from that."

// That's why the callback version increments by 4, while the normal version increments by only 1.

    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
 
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value{counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value{counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
