import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Animation2 from './Animation2'
import Animation1 from './Animation1'
import Videobackground from './Videobackground'

function App() {

  return (
    <div className='w-full'>
      <Animation1 />
      <Animation2 />
      <Videobackground />
    </div>
  )
}

export default App
