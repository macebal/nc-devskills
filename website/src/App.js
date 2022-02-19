import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from './components/InputForm';
import ResultsTable from './components/ResultsTable';
import SSNApi from './api/SSNApi';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

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
      const filteredMembers = members.filter(member => member.ssn === formData.ssn)

      if (filteredMembers.length > 0) {
        alert("Ya existe un miembro con ese SSN")
      } else {
        SSNApi.post(formData).then(jsonResponse => {
          //after the POST request, redraw the table with the new data
          SSNApi.getAll().then(jsonResponse => {
            setMembers(jsonResponse)
          })
        })
      }
    } else {
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
    <div className="container">
      <div className='row justify-content-center'>
        <div className='col-10'>
          <Header />
        </div>
      </div>
      <div className='row align-items-center justify-content-center'>
        <div className='col-4'>
          <InputForm
            onSubmit={handleSubmit}
            onInputChange={handleInputChange}
            formData={formData}
            isValid={isValid}
            onReset={handleReset}
          />
        </div>
        <div className='col-6'>
          <ResultsTable data={members} />
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-10'>
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App;
