import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Cursor from './components/cursor/Cursor'
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu'
import Skills from './pages/Skills'

function App() {
  return (
    <div>
      {/* <Cursor /> */}
      <HamburgerMenu />
      <Home/>
      <About />
      <Skills />
    </div>
  )
}

export default App
