import './App.css';
import InputForm from './components/InputForm';
import ResultsTable from './components/ResultsTable';
import SSNApi from './api/SSNApi';
import { useState, useEffect } from 'react';



function App() {
  const DEFAULT_DATA = {
    firstName: 'test name',
    lastName: 'test last name',
    address: '123 fake street',
    ssn: '111-22-3333',
  }

  const [formData, setFormData] = useState(DEFAULT_DATA);
  const [members, setMembers] = useState([])
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    SSNApi.getAll().then(jsonResponse => {
      setMembers(jsonResponse)
    })
  }, [members])

  useEffect(() => {
    setIsValid(isValidForm())
  }, [formData])


  const handleInputChange = (event) => {
    const target = event.target
    setFormData({
      ...formData,
      [target.name]: target.value.trim()
    })
  }

  const handleReset = (event) => {
    setFormData(DEFAULT_DATA)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setFormData(
      {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        address: formData.address.trim(),
        ssn: formData.ssn.trim(),
      })

    if (isValidForm()) {
        let validSSN = true

        const filteredMembers = members.filter(member => member.ssn === formData.ssn)
        
        if (filteredMembers.length > 0) {
          alert("Ya existe un miembro con ese SSN")
        }else {
          SSNApi.post(formData).then(jsonResponse => {
            //modify the members' array which also triggers the useEffect hook to retrieve data from the API.
            //this is done to speed the display of new info until the api responds
            setMembers({
              ...members,
              formData
            })
          })  
        }
    }else{
      alert("La información ingresada no es válida")
    }
  }

  const isValidForm = () => {
    const isValidString = (str) => {
      return str.trim().length > 1
    }

    const isValidSSN = (ssn) => {
      const regex = new RegExp("^\\d{3}-\\d{2}-\\d{4}$")
      return regex.test(ssn.trim())
    }

    return isValidString(formData.firstName) && isValidString(formData.lastName) && isValidString(formData.address) && isValidSSN(formData.ssn)
  }

  return (
    <div className="App">
      <InputForm 
        onSubmit={handleSubmit} 
        onInputChange={handleInputChange} 
        formData={formData} 
        isValid={isValid} 
        onReset={handleReset}
      />
      <ResultsTable data={members} />
    </div>
  );
}

export default App;
