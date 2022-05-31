import React from 'react'
import Navbar from './components/Navbar/Navbar'
import List from './components/List/List'
import About from './views/About/About'

function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <List></List>
    </>
  )
}

export default App