import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BusinessForm from './components/BusinessForm'
import OwnerForm from './components/OwnerForm'

class App extends Component {

  constructor(){
    super();
    this.handleRequest = this.handleRequest.bind(this);
  }

  handleRequest(e){
    fetch('https://lendingfronttest-app.herokuapp.com/')
      .then(function(response) {
        console.log(response);
        //return response.json();
      });
  }

  render() {
    return (
      <div className="App">
        <div className="container mt-3">
          <ul className="nav nav-tabs">
            <li className="nav-item"><a className="active nav-link" data-toggle="tab" href="#home">Business</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#menu1">Owner</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#menu2">Request Results</a></li>
          </ul>

          <div className="tab-content">
            <div id="home" className="card tab-pane fade in active show">
              <div class="card-body">
                <BusinessForm />
              </div>
            </div>
            <div id="menu1" className="card tab-pane fade">
              <div class="card-body">
                <OwnerForm />
              </div>
            </div>
            <div id="menu2" className="card tab-pane fade">
              <div class="card-body">
                <h3>HOME</h3>
                <p>Some content.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
