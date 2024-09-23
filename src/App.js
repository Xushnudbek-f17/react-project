import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from "./components/Products"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Clients from './components/Clients';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/clients' element={<Clients/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
