import React, { Component } from 'react';

class Section extends Component {
  render() {
    // console.log(this.props.laboratory);

    return (
      <div>
        <p className="pTeste">Frase = {this.props.phrase}</p>
        <h1>Este é o {this.props.laboratory}</h1>
      </div>
    );
  }
}

export default Section;
