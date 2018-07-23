import React, { Component, Fragment } from 'react';
import { Modal } from 'Elements';
import { Toggle } from 'Utilities';
import UserProvider from './UserProvider';
import { Transition } from 'react-spring';
import { Card } from 'Elements/Cards';

import User from './User';
import logo from './logo.svg';
import './App.css';

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
          <section>
            <Toggle>
              {({ on, toggle }) => (
                <Fragment>
                  <button onClick={toggle}>Show / Hide</button>
                  <Transition
                    from={{ opacity: 0, bg: '#82d8d8', height: '0px' }}
                    enter={{ opacity: 1, bg: '#524763', height: '200px' }}
                    leave={{ opacity: 0, bg: '#82d8d8', height: '0px' }}
                  >
                    {on && Header}
                  </Transition>
                </Fragment>
              )}
            </Toggle>
          </section>
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

const Header = styles => (
  <Card
    style={{
      opacity: styles.opactiy,
      background: styles.bg,
      overflow: 'hidden',
      height: styles.height,
    }}
  >
    <h1>Show Me</h1>
    <h3>{styles.bg}</h3>
  </Card>
);

export default App;
