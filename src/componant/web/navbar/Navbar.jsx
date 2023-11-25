import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">R-shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">categrioes</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">products</a>
        </li>
        
       
      </ul>
      
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/register">register</Link></li>
            
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/log in">log in</Link></li>
          </ul>
        </li>
    </div>
  </div>
</nav>
    
    </>
  

  )
}
