import React from 'react';
import './navbar.css';
import {Link, useLocation} from 'react-router-dom';

const Navbar = () =>{

  const location = useLocation();

  return(
    <div>
      <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/roster'>Roster</Link>
          </li>

          <li>
            <Link to='/tavern'>Tavern</Link>
          </li>

          <li>
            <Link to='/missions'>Mission Control</Link>
          </li>
        </ul>
    </div>

  )
}

export default Navbar;