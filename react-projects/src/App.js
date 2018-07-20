import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './components/ToggleRenderProps';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h3>Toggle</h3>
        <Toggle
          render={({ on, toggle }) => (
            <div>
              {on && <h1>ShowMe</h1>}
              <button onClick={toggle}>Show/Hide</button>
            </div>
          )}
        />
        <Toggle
          render={({ on, toggle }) => (
            <div>
              {on && <h1>Nav Item</h1>}
              <button onClick={toggle}>Menu Item</button>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
