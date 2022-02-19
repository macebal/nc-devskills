const SSNApi = {
    getAll() {
        return fetch('http://localhost:8081/api/members').
          then(response => {
            return response.json();
          }).then(jsonResponse => {
            return jsonResponse
          })
    } 
}

export default SSNApi