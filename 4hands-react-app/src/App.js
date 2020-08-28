import React from 'react';
import CurrentMenu from './components/CurrentMenu';
import AddMenu from './components/AddMenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>4 Hands Food Studio</h1>
        <h3>Menu Editor</h3>
      </header>
      <AddMenu/>
      <CurrentMenu/>
    </div>
  );
}

export default App;
