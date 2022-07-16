import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import {Navbar, Footer, Sidebar, Blur} from "./components"
import { useViewport } from "./customhooks";

import "./App.sass";
import { useSelector } from "react-redux";


function App() {
  const viewPort = useViewport()
  const isMobile = viewPort.width <= 1024

  const {isSidebarOpen} = useSelector(store => store.navbar)
  return <BrowserRouter>
    {
      isMobile ? <Sidebar/> : <Navbar/>
    }
    {
      isSidebarOpen ? <Blur/> : null
    }
    <Routes>
      <Route path = "/" element = {<Home/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>;
}

export default App;
