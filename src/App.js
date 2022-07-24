import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sample application for CI/CD purposes. Another branch.
        </p>
        <a
          className="App-link"
          href="https://github.com/gauravjot"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Gauravjot
        </a>
      </header>
    </div>
  );
}

export default App;
