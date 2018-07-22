import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import { Toggle, Modal, Portal } from './Utilities';

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
                <h1>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi impedit est magni
                  similique, molestiae suscipit possimus neque obcaecati cupiditate temporibus.
                </h1>
              </Modal>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
