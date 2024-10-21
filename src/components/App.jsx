import '../styles/App.css';
import NavBar from './NavBar.jsx';


function App() {
  return (
    <div className="App">

      <NavBar/>

      <div className='container'>
      <header className="App-header">
          <div className="left-section">
            <h1>LeBlanc Lab</h1>
            <p> Lorem Ipsum <a href="https://physics.brown.edu">Brown University </a> </p>
            <p>lfskdlfdsf fjskfsjlfjsd j fjslkfjsdlf  jkldjflksjflsd fsjklj fjsl fsjdfkl sjf lsjflksfj dslfsj fsl</p>
            <a href="/publications"> <button>SEE OUR PUBLICATIONS &rarr;</button></a>
            
          </div>
      </header>
      <div className="right-section">
        <img id="team-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Brown_Bears_Athletics_logo.svg/800px-Brown_Bears_Athletics_logo.svg.png"></img>
      </div>
      </div>
    </div>
  );
}

export default App;