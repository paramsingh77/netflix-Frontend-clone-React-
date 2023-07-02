import React from 'react'
import './App.scss'
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
     </BrowserRouter>
  )
  
};

export default App;
