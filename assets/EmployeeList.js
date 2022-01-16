import React from "react";

const EmployeeList = function(props) {
    // This component renders a table of employees
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {
            props.employees.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{employee.name}</td>
                  <td>{employee.department}</td>
                  <td>{employee.salary}</td>
                 </tr>
              );
            })
          }
          </tbody>
      </table>
    );
};

export default EmployeeList;