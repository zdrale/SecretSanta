import React from 'react';
import styles from './Style_EmployeeList';

function EmployeeList(props) {
  return (
    <div style={styles.EmployeeListWrapper}>
      {props.employeeList && props.employeeList.map((employee) =><div style={styles.EmployeeItem}> {employee} </div>)}
    </div>
  );
}

export default EmployeeList;
