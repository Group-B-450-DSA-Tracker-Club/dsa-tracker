import React from 'react';
import logo from './logo.svg';
import './App.css';
import isengard from "./utils/isengard";
import createStore from "./utils/annatar";

interface objectToStore{
  name?: string;
  info?: string;
}

const test:objectToStore = {
  name: "test",
  info: "info"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          {isengard.addDocument(test,'test','keyname')}
        </a>
      </header>
    </div>
  );
}

export default App;
