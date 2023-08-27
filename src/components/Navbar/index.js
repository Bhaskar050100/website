
import React from 'react';

import './index.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#"><img src='https://idias-org.ibrave.host/wp-content/uploads/2022/11/158x46xMain-Logo.png.pagespeed.ic.HSS86F4AlW.png' className='company-logo' alt='IDIAS'/></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#About">About</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#CarJour">Careers & Journals</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Conferences">Conferences</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Registration">Registration</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
