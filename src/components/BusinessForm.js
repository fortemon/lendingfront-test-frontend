import React, { Component } from 'react';

class BusinessForm extends Component{

  constructor(){
    super();
  }

  render(){
    return(
      <form className="col-md-12" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="number"
            name="tax_id"
            onChange={this.handleInput}
            className="form-control"
            placeholder="Tax Id"
            min="1"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="business_name"
            className="form-control"
            placeholder="Business name"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="business_address"
            className="form-control"
            placeholder="Address"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="business_city"
            className="form-control"
            placeholder="City"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="business_state"
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
        <div className="form-group">
          <input
            type="number"
            name="requested_amount"
            className="form-control"
            placeholder="Loan request"
            min="1"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <select
            name="priority"
            className="form-control"
            onChange={this.handleInput}
          >
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </select>
        </div>

        <button type="submit">
          Create
        </button>
      </form>
    )
  }

}

export default BusinessForm;
