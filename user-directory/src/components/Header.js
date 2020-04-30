import React from 'react';
import '../styles/Header.css';

  
  function Header() {
    return (
      <nav className="navbar d-flex justify-content-center flex-column headerStyle">
      {/* <nav className="navbar d-flex justify-content-center flex-column" style={styles.headerStyle}>"> */}
        <h1 className = "headingStyle">Employee Directory</h1>
        {/* <h1 style={styles.headingStyle}>Employee Directory</h1> */}
      </nav>
    );
  }
  

export default Header;