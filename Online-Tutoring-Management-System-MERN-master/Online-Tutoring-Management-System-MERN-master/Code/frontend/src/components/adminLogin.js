import React, { useState } from "react";
import axios from "axios";
import "../css/loginPages.css";
import admin from '../images/admin.jpg'
import { Link } from "react-router-dom";

function AdminLogin() {

  const[adminID, setAdminID] = useState("")
  const[adminPassword, setAdminPassword] = useState(""); 

  function sendAdminDetails(event){
    event.preventDefault()

  }
  return (

    <div>
      <h3 className="login-as">Login as a Administrator</h3>
        <div class="card-group card-group-2">
      <div class="card card-img-1">
        <img
          src={admin}
          class="card-img-top"
          alt="..."
          style={{ width: "75%" }}
        />
     
      </div>

      <div class="card">
        <div class="card-body">
          <div className="studentLogin" style={{ margineLeft: "0%" }}>
            <div className="mb-3">
              <label
                for="formGroupExampleInput"
                className="form-label studentLoginForm"
              >
                Administrator ID
              </label>
              <input
                type="text"
                className="form-control login-input"
                id="formGroupExampleInput"
                placeholder="ADM00000"
                onChange={(event) => {
                  setAdminID(event.target.value);
                }}
              />
            </div>{" "}
            <br />
            <div className="mb-3">
              <label
                for="formGroupExampleInput2"
                className="form-label studentLoginForm"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control login-input"
                id="formGroupExampleInput2"
                placeholder="Minimum 6 characters"
                onChange={(event) => {
                  setAdminPassword(event.target.value);
                }}
              />
            </div>
            <Link to="/adminDashboard"> <button 
            type="button" 
            class="btn btn-success studentLoginBtn"
            onClick={sendAdminDetails}>
              Login
            </button> </Link>
          
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default AdminLogin;
