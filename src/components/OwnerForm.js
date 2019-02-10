import React, { Component } from 'react';

class OwnerForm extends Component{

  constructor(){
    super();
  }

  render(){
    return(
      <div className="col-md-12" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="number"
            name="social_security_number"
            onChange={this.props.onChangeInput}
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
            onChange={this.props.onChangeInput}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="owner_email"
            className="form-control"
            placeholder="Email"
            onChange={this.props.onChangeInput}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="owner_address"
            className="form-control"
            placeholder="Address"
            onChange={this.props.onChangeInput}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="owner_city"
            className="form-control"
            placeholder="City"
            onChange={this.props.onChangeInput}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="owner_state"
            className="form-control"
            placeholder="State"
            onChange={this.props.onChangeInput}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="owner_postal_code"
            className="form-control"
            placeholder="Postal Code"
            min="1"
            onChange={this.props.onChangeInput}
          />
        </div>
      </div>
    )
  }

}

export default OwnerForm;
