import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return(
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/pre'>Pre Schools</Link></li>
            <li><Link to='/elemntary'>Elementary Schools</Link></li>
            <li><Link to='/middle'>Middle Schools</Link></li>
            <li><Link to='/high'>High Schools</Link></li>
            <li><Link to='/college'>Colleges</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
