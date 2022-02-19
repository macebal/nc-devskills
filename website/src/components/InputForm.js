import React, { useState, useEffect } from 'react';
import './InputForm.css';

const InputForm = props => {
  return (
    <form onSubmit={props.onSubmit} onReset={props.onReset}>
      <input type="text" placeholder="First Name" name="firstName" value={props.formData.firstName} onChange={props.onInputChange} />
      <input type="text" placeholder="Last Name" name="lastName" value={props.formData.lastName} onChange={props.onInputChange} />
      <input type="Address" placeholder="Address" name="address" value={props.formData.address} onChange={props.onInputChange} />
      <input type="text" placeholder="SSN" name="ssn" value={props.formData.ssn} onChange={props.onInputChange} />
      <button type="reset">Reset</button>
      <button type="submit" disabled = {!props.isValid}>Save</button>
    </form>
  )
}

export default InputForm;