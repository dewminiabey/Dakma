import React from "react";
import axios from "axios";
import "../css/loginPages.css";
import staff from '../images/staff.jpg'

function teacherLogin() {
  return (

    <div>
      <h3 className="login-as">Login as a Staff</h3>
        <div class="card-group card-group-2">
      <div class="card card-img-1">
        <img
          src={staff}
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
                Staff ID
              </label>
              <input
                type="text"
                className="form-control login-input"
                id="formGroupExampleInput"
                placeholder="STF00000"
                onChange={(event) => {}}
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
                type="text"
                className="form-control login-input"
                id="formGroupExampleInput2"
                placeholder="Minimum 6 characters"
                onChange={(event) => {}}
              />
            </div>
            <button type="button" class="btn btn-success studentLoginBtn">
              Login
            </button>
            <div className="login-problem">
              <p>Didn't Have An Account ? <a href="#">Click Here</a> To Join With Us</p> 
              <p>Frogot Password ? <a href="#">Click Here</a> To Reset Password</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default teacherLogin;
