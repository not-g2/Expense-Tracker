import './App.css';
import Home from './Pages/Home';
import AboutUs from './Pages/About_Us';
import Pricing from './Pages/Pricing';
import Dashboard from './Pages/Dashboard'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import React from 'react'
import MainHeader from './Components/MainHeader';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/login/:loginid' element = {<Dashboard />}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/about' element = {<AboutUs/>}/>
        <Route path='/pricing' element = {<Pricing/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
