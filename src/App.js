import React from 'react';

import './App.css';
//free css included ;) ^

import DogList from './components/DogList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DogList />
      </header>
    </div>
  );
}

export default App;
