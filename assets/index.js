import React from 'react';
import ReactDOM from "react-dom";

import App from "./App";
 
// importing data from the template
//good for static data without building out an api
const DEPARTMENT_CHOICES = JSON.parse(document.getElementById('department-choices').textContent);
console.log("Employment: ", DEPARTMENT_CHOICES);

// This will soon be depreciated in React 18
ReactDOM.render(
  <App />,
  document.getElementById('js-framework-home')
);

// Use this instead.
//import { createRoot } from 'react-dom/client';
//import React from 'react';
//import App from './App';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App/>);
