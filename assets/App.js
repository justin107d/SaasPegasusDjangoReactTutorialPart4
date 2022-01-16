import React from 'react';

import EmployeeApplication from './EmployeeApplication';

function getCookie(name) {
  // generic function to retrieve cookie data
  var cookieValue = null;
  if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) == (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

//retrieve data from the api endpoint using fetch
fetch('/employment/api/employees/', {
    method: 'get',
    credentials: 'same-origin',
    headers: {
        'X-CSRFToken': getCookie('csrftoken'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
  .then(res => res.json())
  .then(
    (result) => {
      // whatever you want to do with the list of employees will happen here
      handleEmployeeLoadSuccess(result);
    },
    (error) => {
      handleEmployeeLoadFailed(error);  // error handling
    }
);

//function for handling success
function handleEmployeeLoadSuccess(result){
  console.log('Success: ', result)
}

//function for handling errors
function handleEmployeeLoadFailed(result){
  console.log('error: ', result)
}


const App = () => {
    return (
        <div>
            <p> we are in the app.js now </p>
            <EmployeeApplication />
        </div>
    )
    }

export default App;