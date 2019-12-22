import React, { Component } from 'react';
import NavBarComp from './components/NavBarComp';
import MainInfo from './components/MainInfo';
import BlodsukkerListe from './components/BlodsukkerListe';

import { Provider } from 'react-redux';
import store from './store.js';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <NavBarComp></NavBarComp>
{/*             <MainInfo></MainInfo>  */}
          <BlodsukkerListe></BlodsukkerListe>
      </div>
      </Provider>
    );
  }
}

export default App;
