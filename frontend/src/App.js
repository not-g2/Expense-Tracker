import './App.css';
import NavBar from './Components/NavBar'
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <div className="section-20">
        {/*Home Friends Groups Inbox Transaction-History Vault*/}
        <div className="navigation-bar">
          <NavBar />
        </div>
      </div>
      <div className="section-80">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
