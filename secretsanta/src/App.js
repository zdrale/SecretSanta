import React from 'react';
import Header from './components/header/Header';
import AddNewEmployee from './components/add-new-employee/AddNewEmployee';

function App() {
  return (
    <div style={{backgroundColor:"#F0F3F7"}}>
      <Header />
      <AddNewEmployee />
    </div>
  );
}

export default App;
