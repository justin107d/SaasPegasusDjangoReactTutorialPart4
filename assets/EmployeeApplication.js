import React, { useState, useEffect } from "react";

import EmployeeList from "./EmployeeList";

const EmployeeApplication = function(props) {
    // State variable to show whether we're loading data or not.
    // Defaults to "true" to show a loading screen until we get our data from the API
    const [isLoading, setIsLoading] = useState(true);
    // State variable where we'll save our list of employees
    const [employees, setEmployees] = useState([]);

    
    // This effect will be called when the component mounts and fetch the data
    // from our API
    useEffect(
      () => {
        fetch('/employment/api/employees/')
        .then( result => result.json())
        .then((data) => {
            // when we get the data back we set it in our state variable
            setEmployees(data);
            // and unset the "loading" flag
            setIsLoading(false);
          });
      }, 
      [], // this argument will prevent continually hitting the APIs on state changes.
    );  


    // Show a loading state if we haven't gotten data back yet
    if (isLoading) {
      return <p>Employee data is loading...</p>;
    }
    // Show an "empty" state if we have no employees
    if (employees.length === 0) {
      return <p>No employees found!</p>;
    } else {
      // Show our employee list component with the data we got back
      return <EmployeeList employees={employees} />;
    }
}

export default EmployeeApplication;