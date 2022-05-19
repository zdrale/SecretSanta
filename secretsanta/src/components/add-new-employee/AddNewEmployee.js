import React from 'react';
import styles from './Style_AddNewEmployee';

function AddNewEmployee() {
  return (
    <div style={styles.newEmployeeWrapper}>
        <form>
            <input style={styles.newEmployeeInput} type="text" placeholder='Unesi ime zaposlenog...'></input>
            <input style={styles.submitButton} type="submit" value="Dodaj zaposlenog"/>
        </form>
    </div>
  );
}

export default AddNewEmployee;
