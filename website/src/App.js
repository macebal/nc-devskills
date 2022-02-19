import './App.css';
import InputForm from './components/InputForm';
import ResultsTable from './components/ResultsTable';
import SSNApi from './api/SSNApi';
import { useState, useEffect } from 'react';


function App() {
  const DEFAULT_DATA = {
    firstName: '',
    lastName: '',
    address: '',
    ssn: '',
  }

  const [formData, setFormData] = useState(DEFAULT_DATA);
  const [members, setMembers] = useState([])
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    SSNApi.getAll().then(jsonResponse => {
      setMembers(jsonResponse)
    })
  }, [])

  useEffect(() => {
    setIsValid(isValidForm())
  }, [formData])

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target)
  }

  const handleInputChange = (event) => {
    const target = event.target
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleReset = (event) => {
    setFormData(DEFAULT_DATA)
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
      <InputForm onSubmit={handleSubmit} onInputChange={handleInputChange} formData={formData} isValid={isValid} onReset={handleReset}/>
      <ResultsTable data={members} />
    </div>
  );
}

export default App;
