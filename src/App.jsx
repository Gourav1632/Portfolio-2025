import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Cursor from "./components/cursor/Cursor";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
          <HamburgerMenu />
          <Home />
          <About />
          <Skills />
          <Work />
          <Projects />
          <Contact/>
    </>
  );
}

export default App;
