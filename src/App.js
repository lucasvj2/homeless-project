import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Near from "./pages/Near"
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Donate from "./pages/Donate";
import Resources from "./pages/Resources";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="test">
      <Header className="head" />
      <Routes>
        <Route path="/" element={<Home className="test" />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/shelters" element={<Near />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
