import React from 'react';
import './navbar.css';


const Navbar = ()=> {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              
              <li className="nav-item">
                <a className="nav-link" href="#">SAVE MORE ON APP</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">SELL ON BARAZ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CUSTOMER CARE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">TRACK MY ORDER</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                                             SIGNUP / LOGIN
                                              </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">BARAZ AFFILIATE PROGRAM </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">lang</a> */}
                <select name="lang" id="vasa">
                  <option value="volvo">Bangla</option>
                  <option value="saab">English</option>
                  
                </select>
              </li>
              

              
            </ul>
          </div>
        </div>
      </nav>
    )
};

export default Navbar;