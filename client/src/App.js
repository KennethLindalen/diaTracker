import React, { Component } from 'react';
import NavBarComp from './components/NavBarComp';
import MainInfo from './components/MainInfo';
import BlodsukkerListe from './components/BlodsukkerListe';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarComp></NavBarComp>
{/*             <MainInfo></MainInfo>  */}
          <BlodsukkerListe></BlodsukkerListe>
      </div>
    );
  }
}

export default App;
