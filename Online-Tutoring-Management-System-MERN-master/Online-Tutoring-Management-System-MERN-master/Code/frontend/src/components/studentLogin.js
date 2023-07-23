import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/loginPages.css";
import student from "../images/student.jpg";
import {Link} from "react-router-dom"

function StudentLogin() {

  const[userID, setUsername] = useState("");
  const[password, setPassword] = useState("");

  function sendLoginData(event){
     event.preventDefault()

  if(userID == "" || password == ""){
    alert("Please Fill Reqired Fields !");
  }else if(password.length < 6){
    alert("Password Should be At Least 6 Characters !");
  }else{
    const newLogin = {
      userID, password
    }
  
      axios
      .post("http://localhost:8070/auth/login", newLogin)
      .then((res)=>{
        console.log(res);

      }).catch((error)=>{
        alert("Login Unsuceessful, Please Check Username and Password Again !")
        console.log(error);
      })

  }
    
    // .then(() =>{
    //   alert("Login Successful");
    // })
    // .catch((err)=>{
    //   console.log(err);
    //   alert("Login Unsucessfull")
    // })


}

  return (

    <div>
      <h3 className="login-as">Login as a Student</h3>
        <div class="card-group card-group-2">
      <div class="card card-img-1">
        <img
          src={student}
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
                Student ID
              </label>
              <input
                type="text"
                className="form-control login-input"
                id="formGroupExampleInput"
                placeholder="STD000000"
                required
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
          
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
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <button 
              type="button" 
              className="btn btn-success studentLoginBtn"
              onClick={sendLoginData}>
              Login
            </button>
            <br/>
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

export default StudentLogin;
