import React from 'react'
import Accordion from './Accordion';
import PropTypes from 'prop-types';


var Navbar = (props)=> {
   
  return (
   <> <div className='bg-dark'>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
   <div className="container-fluid">
       <a className="navbar-brand text-white" href="/">{props.nav}</a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
           <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
           </li>
           <li className="nav-item">
           <a className="nav-link text-white" href="/">Link</a>
           </li>
           <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Dropdown
           </a>
           <ul className="dropdown-menu bg-dark">
               <li><a className="dropdown-item text-white" href="/">{props.action1}</a></li>
               <li><a className="dropdown-item text-white" href="/">{props.action2}</a></li>
               <li><hr className="dropdown-divider"/></li>
               <li><a className="dropdown-item text-white bg-danger" href="/">{props.action3}</a></li>
           </ul>
           </li>
           
       </ul>
       <label className='nav-link text-warning'>Made By {props.name} and {props.name2}</label>
       
       </div>
   </div>
   </nav>
</div>
<Accordion/>
</>
  );

  
}
//set default typees
Navbar.defaultProps = {
    nav: 'Our Navbar',
    name: 'Hamza',
    name2: 'Khansa',
    action1: 'Call US',
    action2: 'Visit US',
    action3: 'Bomb US'
}
//set default types
Navbar.propTypes = {
    nav: PropTypes.string,
    name: PropTypes.string,
    name2: PropTypes.string,
    action1: PropTypes.string,
    action2: PropTypes.string,
    action3: PropTypes.string
}
export default Navbar;