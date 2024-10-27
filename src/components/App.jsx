import '../styles/App.css';
import NavBar from './NavBar.jsx';

function App() {
  return (
    <div className="App">

      <NavBar/>

      <div className='container'>

      <header className="App-header">

          <div className="left-section">
            <h1 id="main-header">LeBlanc <a id="lighten-font">Lab</a></h1>
            <p> Lorem Ipsum <a href="https://physics.brown.edu">Brown University </a> </p>
            <p>Ante dictumst sapien vitae eget at habitasse cubilia. Sit dis varius lobortis 
              commodo et suscipit lacinia. Dui cras mattis platea vulputate dapibus dolor. 
              Fusce tempus interdum orci bibendum amet pharetra. Hendrerit elit vitae tristique
               nec ex platea, torquent et lacinia. Odio blandit fames est mus elit justo duis 
               gravida.</p>
               <br/>
            <a href="/publications"> <h3>SEE OUR PUBLICATIONS &rarr;</h3></a>
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