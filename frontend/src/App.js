import './App.css';
import Home from './Pages/Home';
import AboutUs from './Pages/About_Us';
import Pricing from './Pages/Pricing';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/about' element = {<AboutUs/>}/>
        <Route path='/pricing' element = {<Pricing/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
