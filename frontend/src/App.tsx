import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Auth } from './authentication/Auth'
import { Register } from './register/Register';

function App() {
  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
