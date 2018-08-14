import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './Section';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      variable: 0
    };
  }

  handleClick() {
    // console.log("batata");
    this.setState({variable: this.state.variable + 1});
  }

  render() {
    const vetString = ["joão", "josé", "jackson", "jeremias", "judas"];
    const newVetString = vetString.map(phrase => ("Nome: " + phrase));
    const elements = newVetString.map((phrase, i) => (
      <Section laboratory={phrase} key={i} phrase="Esta é a frase"/>
    ));

    // ========================= ## ======================


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Para iniciar, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => console.log("batata")}>
          Clique me
        </button>
        <div>
          Cliques: {this.state.variable}
          {/*elements*/}
          <Section laboratory="LITE" phrase="Tinha elements"/>
          <Section laboratory="LEDS" phrase="Ola mundo"/>
        </div>
      </div>
    );
  }
}

export default App;
