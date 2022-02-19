import React from 'react'

const FAKE_DATA = [
    {
        firstName: 'Homer',
        lastName: 'Simpson',
        address: '743 Evergreen Terrace',
        ssn: '000-00-0000'
    },
    {
        firstName: 'El Barto',
        lastName: 'Simpson',
        address: '123 Fake Street',
        ssn: '333-22-4444'
    }
];

const ResultsTable = props => {
  console.log(`Re Render Table: ${props.data}`)
  return (
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>SSN</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map(result => (
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