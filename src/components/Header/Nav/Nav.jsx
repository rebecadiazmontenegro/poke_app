import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return <nav>
          <ul>
            <li><Link to='/'>Search</Link></li>
            <li><Link to='/new'>New</Link></li>
            <li><Link to='/pokemon'>Details</Link></li>
          </ul>
          </nav>
};

export default Nav;
