import './App.css';
import InputForm from './components/InputForm';
import ResultsTable from './components/ResultsTable';
import SSNApi from './api/SSNApi';
import { useState, useEffect } from 'react';


function App() {
  const [members, setMembers] = useState([])
  
  useEffect(() => {
    SSNApi.getAll().then(jsonResponse => {
      setMembers(jsonResponse)
    })
  },[])

  return (
    <div className="App">
      <button type='button' onClick={event => setMembers(SSNApi.getAll())}>Test!</button>
      <InputForm />
      <ResultsTable data={members}/>
    </div>
  );
}

export default App;
