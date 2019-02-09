import React, { Component } from 'react';

class OwnerForm extends Component{

  constructor(){
    super();
  }

  render(){
    return(
      <form className="col-md-12" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="number"
            name="social_security_number"
            onChange={this.handleInput}
            className="form-control"
            placeholder="Social Security"
            min="1"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="owner_name"
            className="form-control"
            placeholder="Name"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="owner_email"
            className="form-control"
            placeholder="Email"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="owner_address"
            className="form-control"
            placeholder="Address"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="owner_city"
            className="form-control"
            placeholder="City"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="owner_state"
            className="form-control"
            placeholder="State"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="business_postal_code"
            className="form-control"
            placeholder="Postal Code"
            min="1"
            onChange={this.handleInput}
          />
        </div>

        <button type="submit">
          Create
        </button>
      </form>
    )
  }

}

export default OwnerForm;
