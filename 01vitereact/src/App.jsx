
import Chai from "./chai"

function App() {
// we can export only one element at a time so we bind it in fregment
  const username = "chai aur code"
  return (
    <>
      <Chai/>
      <h1>React and chai with vite {username}</h1>
      {/*  to inject some vairiable name we directly inject evaluated final variable name not any condition */}
      <p>test para</p>
    </>
  )
}

export default App


// Learned About Some Best Practices Using React
// -> Name the component capitalize e.g App.js
// -> We can name both App.js & App.jsx but in vite development environment we have to use jsx
// -> We can return only one component by a jsx function so it's good to wrap in <></> or <div></div>
// -> Created our own component Chai.jsx rendered successfully