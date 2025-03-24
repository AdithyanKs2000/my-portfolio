import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from './header/header';
import Home from './home/home';
import Video from './video/video';

function App() {
  return (
    <Router>
      <Video/>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<h1 className="text-center mt-10">About Page</h1>} />
        <Route path="/contact" element={<h1 className="text-center mt-10">Contact Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
