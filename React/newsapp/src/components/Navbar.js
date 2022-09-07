import React from "react";
import { Link } from 'react-router-dom';

const Navbar = ()=>{
    return (
      <nav className="navbar navbar-dark bg-dark fixed-top ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title text-danger" id="offcanvasDarkNavbarLabel">Naviget</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body text-light">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/General">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Business">Business</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Entertainment">Entertainment</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/General">General</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Health">Health</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Science">Science</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Sports">Sports</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Technology">Technology</Link>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li> */}
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    );
  }

  export default Navbar
