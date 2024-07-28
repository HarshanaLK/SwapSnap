import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import './App.css';





function App() {
  
  return (
      <div className='App'>
        <Router>
        <NavBar/>
          <Routes>
            <Route path="/" element= {<Home/>}></Route>
          </Routes>
        </Router>
      </div>  
  );
}

export default App;
