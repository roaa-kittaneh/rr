import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/User';
import { CartContext } from '../context/Cart';



export default function Navbar() {

  let { userToken, setUserToken, userData, setUserData } = useContext(UserContext);
  const {count}=useContext(CartContext);
  console.log(count);
  let navigate=useNavigate();
  const logout = () => {
    localStorage.removeItem("userToken");
    setUserToken(null);
    setUserData(null);
    navigate('/');
  }
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
          <Link  className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">categrioes</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">products</a>
        </li>
        {userToken?( <li className="nav-item">
           <Link className="nav-link" to="/cart">cart {count}</Link>
        </li>):null}
      </ul>
      
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           {userData!=null? userData.userName:'Account'}
          </a>
          <ul className="dropdown-menu">
           
                {userToken==null?<>
                  <li><Link className="dropdown-item" to="/register">register</Link></li>
                 <li><hr className="dropdown-divider" /></li>
                 <li><Link className="dropdown-item" to="/login">log in</Link></li>
                
                </>:(
                  <>
                 <li><Link className="dropdown-item" to="/profile">profile</Link></li>
                 <li><hr className="dropdown-divider" /></li>
                 <li><Link className="dropdown-item" onClick={logout}>log out</Link></li>
                  
                  </>
                )}
          </ul>
        </li>
    </div>
  </div>
</nav>
    
    </>
  

  )
}
