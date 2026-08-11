import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h2>Custom App!</h2>
    </div>
  )
} 

// react want a special kind of syntax reacteleemnt syntax cant be passed as it create at backend this react elemnet type in myapp syntax and run at down with fregments this is behind thw work

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href = "https://google.com" target='_blank'>Visit google</a>
)

const anotheruser = 'chai aur code'
// to inject some vairiable name we directly inject evaluated final variable name not any condition babble inject it transpiler

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click me to visit google',
  anotheruser
)


createRoot(document.getElementById('root')).render(

  reactElement
  // <App/>
  
)
