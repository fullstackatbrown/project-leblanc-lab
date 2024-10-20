import logo from './logo.svg';
import '../styles/App.css';
import NavBar from './NavBar.jsx';
import BibTexParser from './BibTexParser.jsx';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
             <div className="App">
      <BibTexParser />
     </div>
      </header>
    </div>
  );
}

export default App;