import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home/Home.jsx';
import NavBar from './Components/NavBar';
import About from './Pages/About/About.jsx'
import './App.css';
import Footer from './Pages/Footer/Footer.js';
import Contactus from './Pages/Contactus/Contactus.js';




function App() {
  
  return (
      <div className='App'>
        <Router>
        <NavBar/>
          <Routes>
            <Route path='/' element= {<Home/>}></Route>
            <Route path='/contact' element={<Contactus/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Routes>
          <Footer/>
        </Router>
      </div>  
  );
}

export default App;
