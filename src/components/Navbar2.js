import React from "react";
import PropTypes from 'prop-types'
export default function Navbar2(props){
    return(
        <>

        <nav className={`navbar navbar-expand-lg navbar navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="#">{props.mode}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#"
                >Home<span className="sr-only">(current)</span></a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">about</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
             <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link" href="Contact.html">Contact Us</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
          {/* <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">De</label>
</div> */}

        </div>
        <div className="form-check form-switch">
  <input className="form-check-input" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
      </nav>
<input type="checkbox" data-toggle="switchbutton" checked data-onstyle="primary"></input>
<div className="form-check pl-0">
  <input id="stackedCheck1" className="form-check-input" type="checkbox" data-toggle="switchbutton" checked/>
  <label for="stackedCheck1" className="form-check-label">Enabled</label>
</div>
</>

    )
}