import React, {useState, useEffect} from 'react';
import './InputForm.css';

const InputForm = () => {
  const DEFAULT_DATA = {
    firstName: '',
    lastName: '',
    address: '',
    ssn: '',
}
  const [formData, setFormData] = useState(DEFAULT_DATA);
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    setIsValid(isValidForm())
  })
  
  const handleChange = (event) => {
    const target = event.target
    setFormData({
        ...formData,
        [target.name] : target.value.trim()
    })
  }

  const resetForm = (event) => {
      const target = event.target
      setFormData(DEFAULT_DATA)
  }

  const isValidForm = () => {
    const isValidString = (str) => {
        return str.trim().length > 1
    }
  
    const isValidSSN = (ssn) => {
        const regex = new RegExp("^\\d{3}-\\d{2}-\\d{4}$")
        return regex.test(ssn)
    }

    return isValidString(formData.firstName) && isValidString(formData.lastName) && isValidString(formData.address) && isValidSSN(formData.ssn)
  }

  return (
    <form>
        <input type="text" placeholder="First Name" name="firstName" onChange={e => handleChange(e)}/>
        <input type="text" placeholder="Last Name" name="lastName"  onChange={e => handleChange(e)}/>
        <input type="Address" placeholder="Address" name="address"  onChange={e => handleChange(e)}/>
        <input type="text" placeholder="SSN" name="ssn"  onChange={e => handleChange(e)}/> 
        <button type="reset" onClick={e => resetForm(e)}>Reset</button>
        <button type="button" disabled = {!isValid}>Save</button>
    </form>
  )
}

export default InputForm;