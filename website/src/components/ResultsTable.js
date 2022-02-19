import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const ResultsTable = props => {

  return (
    
    <table className='table table-striped table-hover justify-center text-center'>
        <thead className='table-success'>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>SSN</th>
            </tr>
        </thead>
        <tbody>
            {props.data !== undefined &&
            props.data.map(result => (
                <tr key={result.ssn.toString()}>
                    <td>{result.firstName}</td>
                    <td>{result.lastName}</td>
                    <td>{result.address}</td>
                    <td>{result.ssn}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default ResultsTable;