import React from 'react';
import Header from './components/header/Header';
import AddNewEmployee from './components/add-new-employee/AddNewEmployee';
import EmployeeList from './components/employee-list/EmployeeList';

function App() {
  return (
    <div>
      <Header />
      <AddNewEmployee />
    </div>
  );
}

export default App;
