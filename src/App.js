import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
//actions
import {actinSetarPrimeiroValorST,
  actinSetarSegundoValorST}from './actions/actionSemThunk'


class App extends Component {

  constructor(props){
    super(props);
  }

  setarReducerComAwait=async(valor)=>{

    console.log('valor recebido',this.props)

    //setar o 1º valor
    await this.props.actinSetarPrimeiroValorST(valor)

    //setar o 2º valor
    await this.props.actinSetarSegundoValorST(valor)

    //resultado: 20
    console.log('soma = ',this.props.primeiroValorST +
    this.props.segundoValorST);
  }

  setarReducerSemAwait=(valor)=>{

    console.log('valor recebido',this.props)

    //setar o 1º valor
     this.props.actinSetarPrimeiroValorST(valor)

    //setar o 2º valor
     this.props.actinSetarSegundoValorST(valor)

     //resultado: 0
    console.log('soma = ',this.props.primeiroValorST +
    this.props.segundoValorST);
  }



  render() { 
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <p></p>
          <button onClick={() => this.setarReducerComAwait(10)}>setar Reducer Com Await</button><br />
          <button onClick={() => this.setarReducerSemAwait(10)}>setar Reducer Sem Await</button>
        </div>
        </div>
    );
  }
}


function mapStateToProps(state) {
   return { ...state.ReducerSemThunk, } 
  }

const mapDispatchToProps = dispatch => bindActionCreators(
  {actinSetarPrimeiroValorST,
  actinSetarSegundoValorST},dispatch
);

export default connect(mapStateToProps,mapDispatchToProps)(App);
