import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import dea
export default function Navbar(props) {
    // const [text,settext]=useState("Enable light Mode");
    // const [mode,setMYStyle]=useState({
    //     color:'white',
    //     backgroung:'white'
    // })
    const [text1,settext1]=useState("Enable puprle Mode")
    return (
<>

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="Nomatches">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"to="about">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="textfrom">TextFrom</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

{/* Button from the booatstrap */}
<div className={`form-check form-switch my-2 mx-2 text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`disable ${props.mode} mode`}</label>
</div>
<div className={`form-check form-switch my-2 mx-2 text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode1}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{text1}</label>
</div>
    </div>
  </div>
</nav>

</>

 
        
    )
}
// Navbar.propTypes = {
//     // proptypes set the types of the props it should be string or number etc
//     title: PropTypes.string.isRequired,// if put required than if we will not give any props value than it will give an error
//     home: PropTypes.string
// }

// Navbar.defaultProps={
//     title:"Set Value here",
//     home:"Set Value here"
// };
// if we forget to give props than defaultPrps is required