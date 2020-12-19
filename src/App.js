import logo from './logo.svg';
import tw, { css } from 'twin.macro'

import './App.css';

const Button = tw.button`bg-black text-white`


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>test</Button>
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
