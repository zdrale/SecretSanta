import React from 'react';
import Logo from '../../assets/santa.png'
import styles from './Style_Header';

function Header() {
  return (
    <div style = {styles.headerWrapper}>
        <img src={Logo} style ={styles.santa}/>
        <h1 style={styles.header}>Secret Santa</h1>
    </div>
  );
}

export default Header;
