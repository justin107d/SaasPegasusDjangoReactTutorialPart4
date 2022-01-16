import React from 'react';
import ReactDOM from "react-dom";

import App from "./App";
 
// importing data from the template
//good for static data without building out an api
const DEPARTMENT_CHOICES = JSON.parse(document.getElementById('department-choices').textContent);
console.log("Employment: ", DEPARTMENT_CHOICES);

ReactDOM.render(
  <App />,
  document.getElementById('js-framework-home')
);

