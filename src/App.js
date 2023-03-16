import logo from './coryn.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        My name is Coryn Colon and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/corync"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my work!
        </a>
      </header>
    </div>
  );
}

export default App;
