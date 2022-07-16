import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import {Navbar, Footer} from "./components"

import "./App.sass";

function App() {
  return <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>;
}

export default App;
