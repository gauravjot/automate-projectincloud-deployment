import './App.css';
import aroundjpg from './assets/around.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={aroundjpg} alt="logo"/>
        <p>
          What goes around come around ∞
        </p>
        <a
          className="App-link"
          href="https://github.com/gauravjot"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Gauravjot 2022
        </a>
      </header>
    </div>
  );
}

export default App;
