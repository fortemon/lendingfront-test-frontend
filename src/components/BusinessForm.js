import React, { Component } from 'react';

class BusinessForm extends Component{

  render(){
    return(
      <div className="col-md-12" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="number"
            name="tax_id"
            onChange={this.props.onChangeInput}
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
            onChange={this.props.onChangeInput}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="business_address"
            className="form-control"
            placeholder="Address"
            onChange={this.props.onChangeInput}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="business_city"
            className="form-control"
            placeholder="City"
            onChange={this.props.onChangeInput}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="business_state"
            className="form-control"
            placeholder="State"
            onChange={this.props.onChangeInput}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="business_postal_code"
            className="form-control"
            placeholder="Postal Code"
            min="1"
            onChange={this.props.onChangeInput}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="requested_amount"
            className="form-control"
            placeholder="Loan request"
            min="1"
            onChange={this.props.onChangeInput}
          />
        </div>
        <div className="form-group">
          <select
            name="priority"
            className="form-control"
            onChange={this.props.onChangeInput}
          >
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </select>
        </div>
      </div>
    )
  }

}

export default BusinessForm;
