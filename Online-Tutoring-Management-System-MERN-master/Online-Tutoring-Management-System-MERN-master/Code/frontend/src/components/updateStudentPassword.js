import React, { useState } from "react";
import axios from "axios";
import '../css/updateStudentPassword.css'

function UpdateStudntPassword(){

  const [username, setStudentID] = useState("");
  const [password, setStudentPWD] = useState("");

  function sendStudentPassword(event){
    event.preventDefault();

    const updatedStdPwd = {
      password
    };

    axios
    .post("http://localhost:8070/student/updatePassword", updatedStdPwd)
    .then(() => {
      alert("Student Password Updated Successfully");
    })
    .catch((err) => {
      alert(err);
    })
  }

    return(
        <div
      className= "updateStudentPassword" style={{margineLeft: "0%"}} 
    >
      <h3 style={{ textAlign: "center" }}>Update Student's Password</h3>  <hr className="hLine"/>

      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">
          Student ID
        </label>
        <input 
          type="text"
          className="form-control login-input"
          id="formGroupExampleInput"
          placeholder="STD0000"
          onChange={(event) => {
            setStudentID(event.target.value);
          }}
        />
      </div> <br/>

      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">
          New Password
        </label>
        <input 
          type="password"
          className="form-control login-input"
          id="formGroupExampleInput"
          placeholder="Minimum 6 characters"
          onChange={(event) => {
            setStudentPWD(event.target.value);
          }}
        />
      </div> <br/>
      
      <div className="mb-3">
        <label for="formGroupExampleInput2" className="form-label">
          Re-Enter New Password
        </label>
        <input
          type="password"
          className="form-control login-input"
          id="formGroupExampleInput2"
          placeholder="Minimum 6 characters"
          
        />
      </div> <br/>

      <button 
        type="button" 
        class="btn btn-success"
        onClick={sendStudentPassword}>
        Change Password
      </button>
    </div>
    )
}

export default UpdateStudntPassword;