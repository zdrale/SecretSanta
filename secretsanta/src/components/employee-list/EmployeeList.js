import React, {useState} from 'react';
import styles from './Style_EmployeeList';

function EmployeeList(props) {
  
  const [state, setState] = useState();
  const [state1, setState1] = useState();
  const [state2, setState2] = useState();



  const generate = () => {
    while(props.employeeList.length > 0) {
      console.log(props.employeeList)
      setState(props.employeeList.splice([Math.floor(Math.random() * props.employeeList.length)], 1));
      console.log(props.employeeList)
      setState1(props.employeeList.splice([Math.floor(Math.random() * props.employeeList.length)], 1));
      setState2(props.employeeList);
      console.log(state2)
    }
  } 

  return (
    <div style={styles.EmployeeListWrapper}>
      {props.employeeList && props.employeeList.map((employee) =><div style={styles.EmployeeItem}> {employee} </div>)}
      {props.employeeList.length  > 0 && <button onClick={generate}>Generisi! </button>}
      {state && <div>{state}</div>}
      {state1 && <div>{state1}</div>}
    </div>
  );
}

export default EmployeeList;
