import React, { Component } from 'react';
import '../App.css';
import { Route, Switch , Link } from "react-router-dom";
import { Provider } from 'react-redux';
import reducers from '../reducers';
import { createStore,applyMiddleware } from 'redux';
import {  Layout  , Header ,Navigation , Drawer ,Textfield , Content} from 'react-mdl';
import ReduxThunk from 'redux-thunk';
import Home from './Home'
import Profile from './Profile'
import contact from './contact'
import aboutme from './aboutme'
import Resume from './resume'


const store = createStore(reducers, {} , applyMiddleware(ReduxThunk));

const Main = () => {
    return(
        <Provider store={store}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path ="/Resume" component={Resume} />
                <Route path="/Profile" component={Profile} />
                <Route path="/contact" component={contact} />
                <Route path="/aboutme" component={aboutme} />
            </Switch>
        </Provider> 
    )
}
export default Main;