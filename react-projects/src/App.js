import React, { Component, Fragment, createContext } from 'react';
import { Modal } from 'Elements';
import { Toggle } from 'Utilities';
import { UserContext } from './UserContext';
import User from './User';
import logo from './logo.svg';
import './App.css';

class UserProvider extends Component {
  state = {
    id: '123',
    name: 'Brandon',
    email: 'Brandon@gmail.com',
  };

  logout = () => {
    this.setState({
      id: null,
      name: '',
      email: '',
    });
  };

  render() {
    return (
      <UserContext.Provider value={{ user: this.state, logout: this.logout }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <User />
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
      </UserProvider>
    );
  }
}

export default App;
