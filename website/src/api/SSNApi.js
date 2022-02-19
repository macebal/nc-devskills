const SSNApi = {
    getAll() {
        return fetch('http://localhost:8081/api/members').
          then(response => {
            return response.json();
          }).then(jsonResponse => {
            return jsonResponse
          })
    },
    post(data) {
      //test for duplicate SSN
      return fetch('http://localhost:8081/api/members',{
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        return jsonResponse
      })
    } 
}

export default SSNApi