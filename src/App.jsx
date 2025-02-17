import React, { useState } from "react";
import './App.css';
import Navbar from './Components/Header';
import FooterPage from './Components/Footer';
import HomePage from "./Components/Home";
import Category from "./Components/Category";
import Blog from "./Components/Blog";
import About from "./Components/About";

export default function App() {
  return (
    <>
        <Navbar />
        <HomePage />
        <Category />
        <Blog />
        <About />
        <FooterPage />
   
    </>
  );
}



