import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './InputForm.css';

const InputForm = props => {

  return (
    <form onSubmit={props.onSubmit} onReset={props.onReset}>
      {/* <input type="text" className="form-control" placeholder="First Name" name="firstName" onChange={props.onInputChange} /> 
      <input type="text" placeholder="Last Name" name="lastName"  onChange={props.onInputChange} />
      <input type="Address" placeholder="Address" name="address" onChange={props.onInputChange} />
      <input type="text" placeholder="SSN" name="ssn" onChange={props.onInputChange} /> */}

      <div className="mb-2">
        <input type="text" className="form-control" placeholder="First Name" name="firstName" onChange={props.onInputChange} />
      </div>
      <div className="mb-2">
        <input type="text" className="form-control" placeholder="Last Name" name="lastName"  onChange={props.onInputChange} />
      </div>
      <div className="mb-2">
        <input type="text" className="form-control" placeholder="Address" name="address" onChange={props.onInputChange} />
      </div>
      <div className="mb-2">
        <input type="text" className="form-control" placeholder="SSN" name="ssn" onChange={props.onInputChange} />
      </div>
      <hr />
      <div className="text-center">
        <button type="reset" className="mx-5 btn btn-outline-primary">Reset</button>
        <button type="submit" className="mx-5 btn btn-primary" disabled = {!props.isValid}>Save</button>
      </div>
   
      

    </form>
  )
}

export default InputForm;