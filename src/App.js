import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BusinessForm from './components/BusinessForm'
import OwnerForm from './components/OwnerForm'

const __LOANSERVICE__= "https://lendingfronttest-app.herokuapp.com/loan";

class App extends Component {
  constructor(){
    super();
    this.state = {
      inputs:{
        tax_id: '',
        business_name: '',
        business_address: '',
        business_city: '',
        business_state: '',
        business_postal_code: '',
        requested_amount:'',
        social_security_number:'',
        owner_name:'',
        owner_email:'',
        owner_address:'',
        owner_city:'',
        owner_state:'',
        owner_postal_code:''
      },
      alert:'',
      loanTabState: 'disabled',
      loanState: ''
    }
    this.handleRequest = this.handleRequest.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  handleInput(e){
    const {value,name} = e.target;

    this.setState(prevState => ({
      inputs: {
          ...prevState.inputs,
          [name]: value
      }
    }))
  }

  handleRequest(e){

    const error = this.validateField();
    this.setState({
      alert: error
    })

    if(error == ''){
      fetch(__LOANSERVICE__, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          this.state.inputs
        )
      }).then(response => {
        return response.json();
      }).then(data => {
        this.setState({
          loanTabState: '',
          loanState: data.message
        });

        $('#tabList li:last-child a').tab('show');

      });
    }

  }

  validateField(data){
    var error = [];
    Object.keys(this.state.inputs).map((keyname, i) => {
      if(this.state.inputs[keyname] == ''){
        error.push('The field '+ keyname + ' cannot be empty. \n');
      }
    });
    if( error.length > 0){
      return (<div className="alert alert-danger alert-dismissible fade show" role="alert">
                {
                  error.map((e, i) => {
                    return(<p key={i}>{e}</p>)
                  })
                }
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>);
    }
    else {
      return '';
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container mt-3">
          <ul className="nav nav-tabs" id="tabList">
            <li className="nav-item"><a className="active nav-link" data-toggle="tab" href="#home">Business</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#menu1">Owner</a></li>
            <li className="nav-item"><a className={'nav-link '+ this.state.loanTabState} data-toggle="tab" href="#menu2">Request Results</a></li>
          </ul>
          <form>
            <div className="tab-content">
              <div id="home" className="card tab-pane fade in active show">
                <div className="card-body">
                  <BusinessForm onChangeInput={this.handleInput} />
                </div>
              </div>
              <div id="menu1" className="card tab-pane fade">
                <div className="card-body">
                  <OwnerForm onChangeInput={this.handleInput} />
                </div>
              </div>
              <div id="menu2" className="card tab-pane fade">
                <div className="card-body">
                  <h3>The state of your loan is:</h3>
                  <p>{ this.state.loanState }</p>
                </div>
              </div>
            </div>
            {this.state.alert}

            <button className="btn btn-primary mt-3" onClick={this.handleRequest} type="button">
              Send loan request
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
