import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './Welcome'
//import './App.css'

function App() {

  return (
    <>
     {/* <Welcome name="Virat" country="India"/>*/}
     <Skills skill={['React','Node','Express','MangoDB']}/>
      <h1>Hello World</h1>

    </>
  )
}

export default App
