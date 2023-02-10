import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Navbar.css';

function Navegacion() {
  return (
    <>
      <div className="navbarPrincipal">
        <div className="row">
            <div className="col-4">
                <div className="navbarLogo">
                    <span>KM</span>
                </div>
            </div>
            <div className="col-4 pt-3">
                <ul>
                    <li className="navbarLink">About Me</li>
                    <li className="navbarLink">Experience</li>
                    <li className="navbarLink">Work</li>
                    <li className="navbarLink">Contact</li>
                </ul>
            </div>
            <div className="col-4 pt-3">
                <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
                <ul>
                    <li className="iconoSocial"><FaGithub /></li>
                    <li className="iconoSocial"><FaLinkedin /></li>
                    <li className="iconoSocial"><FaInstagram /></li>
                </ul>
                </IconContext.Provider>
            </div>
        </div>
      </div>
    </>
  );
}

export default Navegacion;