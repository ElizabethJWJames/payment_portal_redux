import React, { Component } from 'react';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {auto, reducers } from './redux-auto/index.js';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import Main from './routes/main.js';
import {
  BrowserRouter,
  Route,
  Router,
  Switch,
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import './App.css';

// 'dsn' => 'mysql:host=192.155.245.133;dbname=gosamtech',
// 'username' => 'Rick',
// 'password' => '12345678',
// 'charset' => 'utf8',



// import mysql from 'mysql';
// var connection = mysql.createConnection({
//   host     : '192.155.245.133',
//   user     : 'Rick',
//   password : '12345678',
//   database : 'gosamtech'
// });
//
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//
//   console.log('connected as id ' + connection.threadId);
// });

const webpackModules = require.context("./store", true, /\.js$/);

const middleware = applyMiddleware( auto(webpackModules, webpackModules.keys()))
const history = createBrowserHistory();
const historyMiddleware = applyMiddleware(routerMiddleware(history))
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  middleware,
  historyMiddleware
);

class App extends Component {

  render() {

    // TODO remove for production
    // for dev only!!!!
    window.theStore = store;

    return (
      <Provider store={store}>
        <Router history = {history}>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Main}/>
            </Switch>
          </BrowserRouter>
        </ Router>
      </Provider>
    );
  }
}

// const hocComponent = compose( connect((state, props)=>{
//     return ({
//       alerts: state.alerts,
//     });
// }));

export default App;//hocComponent(App);
