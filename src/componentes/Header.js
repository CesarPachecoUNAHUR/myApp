import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiDog } from '@mdi/js';


import './header.css'

function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Icon path={mdiDog} size={3} className="logo" /> 
          <h1 className="justify-content-center">Iconos</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Pricing</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;