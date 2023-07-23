import React from "react";
import { Link } from "react-router-dom";
import '../css/header.css'

function header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light"  >
      <div className="container-fluid"  >
        <a className="navbar-brand" href="#" style={{color: "white"}} >
          <b style={{color:"black"}}>DAKMA</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{color: "blue"}}>
                <Link to="/"> <b>Home</b> </Link>
              </a>
            </li>
            <li className="nav-item headerItem">
              <a className="nav-link" href="#" style={{color: "blue"}}>
                <b>Tutorials</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{color: "blue"}}>
                <b>Classes</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{color: "blue"}}>
                <b>Time Tables</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{color: "blue"}}>
                <b>Notices</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{color: "blue"}}>
                <Link to="allFeedbacks"><b>Feeedbacks</b> </Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default header;
