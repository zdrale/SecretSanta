import React, { useState } from "react";
import EmployeeList from "../employee-list/EmployeeList";
import styles from "./Style_AddNewEmployee";

function AddNewEmployee() {
  const [employees, setEmployees] = useState([]);
  const [query, setQuery] = useState("");

  const handleClick = () => {
    // Save input term state to React Hooks
    // Add the input term to the list onClick of Dodaj zaposlenog button
    // Save input term state to React Hooks
    setEmployees((employees) => [...employees, query]);
  };

  const updateQuery = ({ target }) => {
    // Update query onKeyPress of input box
    setQuery(target.value);
  };

  const submitHandler = (e) => {
    // Prevent form submission on Enter key
    e.preventDefault();
  };

  return (
    <div style={styles.newEmployeeWrapper}>
      <form onSubmit={submitHandler}>
        <input
          id="employeeName"
          style={styles.newEmployeeInput}
          type="text"
          placeholder="Unesi ime zaposlenog..."
          onChange={updateQuery}
        />
        <input
          style={styles.submitButton}
          onClick={handleClick}
          type="submit"
          value="Dodaj zaposlenog"
        />
        <EmployeeList employeeList={employees} />
      </form>
    </div>
  );
}

export default AddNewEmployee;
