import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './components/ToggleRPC';
import Portal from './components/Portal';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h3>Toggle</h3>
        <Modal>
          <h1>Still In Modal</h1>
        </Modal>
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Login</button>
              <Modal on={on} toggle={toggle}>
                <h1>Still In Toggle</h1>
              </Modal>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
