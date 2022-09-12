import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar(){
  const location = useLocation();
    return (
        <nav className="navbar navbar-dark fixed-top navbar-expand-sm bg-dark mb-3">
  <div className="container-fluid">
    <a className="navbar-brand text-warning" href="/"><strong>Abhishek Singh</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/"?"active":""}`} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/project"?'active':""}`} to="/project">Project's</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/skills"?'active':""}`} to="/skills">Skills</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/services"?'active':""}`} to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/about"?'active':""}`} to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/contact"?'active':""}`} to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;