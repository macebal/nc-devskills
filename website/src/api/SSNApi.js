const SSNApi = {
    getAll() {
        return fetch('http://localhost:8081/api/members').
          then(response => {
            return response.json();
          }).then(jsonResponse => {
            return jsonResponse
          }).catch(e => console.log(e))
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
      }).catch(e => console.log(e))
    } 
}

export default SSNApi