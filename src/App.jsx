import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Product } from "./pages";
import { Navbar, Footer, Sidebar, Blur, ScrollTopButton } from "./components"
import { useViewport } from "./customhooks";

import "./App.sass";
import { useSelector } from "react-redux";


function App() {
  const viewPort = useViewport()
  const isMobile = viewPort.width <= 1024

  const { isSidebarOpen } = useSelector(store => store.navbar)
  return <BrowserRouter>
    {
      isMobile ? <Sidebar /> : <Navbar />
    }
    {
      isSidebarOpen ? <Blur /> : null
    }
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
    </Routes>
    <ScrollTopButton />
    <Footer />
  </BrowserRouter>;



}

export default App;
