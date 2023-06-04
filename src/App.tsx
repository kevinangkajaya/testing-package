import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@kevinangkajaya/package-react-test';
import { ErrorDiv } from '@kevinangkajaya/error-div'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="Kaboom" error="test error div 0.0.1" />
        <ErrorDiv error="test error div 0.0.2" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
