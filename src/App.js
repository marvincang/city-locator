import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Map from './components/Map';
import Time from './components/Time';

function App() {
  return (
    <div className="App">
      <Header name="Marvin Cangcianno"></Header>
      <header className="mv-header">
        <Time></Time>
        <Map></Map>
      </header>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
