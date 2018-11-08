import React, { Component } from 'react';
import { Route, Switch , Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Header from './components/common/Header'
import Bodytap from './components/common/Bodytap'
import Profile from './components/Profile'
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore,applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducers, {} , applyMiddleware(ReduxThunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Bodytap />
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Profile" component={Profile} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;

