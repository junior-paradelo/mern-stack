import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/ ">
            Notes App
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Notes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/create">
                  Create Note
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user">
                  Create User
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
