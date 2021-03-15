/*import React from 'react'
import { render } from 'react-dom'

const Navbar = () => {
    return (
        <div>
            <h1>Hola</h1>
        </div>
    )
}

export default Navbar; */

import React, { Component } from "react";
import "../App.css";
import logo from "../logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} className="imgLogo"></img>
          </a>
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
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="# ">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="# ">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="# ">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="# ">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="# ">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="# ">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="# "
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="# ">
                    Action
                  </a>
                  <a className="dropdown-item" href="# ">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="# ">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
