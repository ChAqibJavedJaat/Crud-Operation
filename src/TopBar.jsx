import React from 'react';
import { Link } from 'react-router-dom';

function TopBar() {
    return ( 
        <div>
    <header className="d-flex  py-3 bg-dark ">
      <ul className="nav nav-pills">
      <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>

        <li className="nav-item"><Link to="/create" className="nav-link">Add</Link></li>
      
      </ul>
    </header>
  </div>
  );
}

export default TopBar;