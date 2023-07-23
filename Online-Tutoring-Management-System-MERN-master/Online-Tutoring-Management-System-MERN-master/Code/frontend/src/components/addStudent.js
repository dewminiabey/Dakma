import React, { useState } from "react";
import axios from "axios";
import "../css/addStudent.css";

function AddStudent() {
  //set 2 variables to store username and password
  const [username, setStudentID] = useState("");
  const [password, setStudentPWD] = useState("");

  function sendStudentData(event) {
    event.preventDefault(); //to prevent default bahaviour of submition

    //create object to pass values to backend
    const newStudent = {
      username,
      password,
    };
    console.log(newStudent);

    axios
      .post("http://localhost:8070/student/addStudent", newStudent)
      .then(() => {
        alert("Student Login Added !");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div
      className="addStudent" 
    >
      <h3 style={{ textAlign: "center" }}>Add New Student</h3> <hr></hr>{" "}
      <br></br>
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">
          New Student ID
        </label>
        <input
          type="text"
          className="form-control add-input"
          id="formGroupExampleInput"
          placeholder="STD000000"
          onChange={(event) => {
            setStudentID(event.target.value); //get StudentID from front-end and assign to variable
          }}
        />{" "}
        <br></br>
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput2" className="form-label">
          New Student Password
        </label>
        <input
          type="text"
          className="form-control add-input"
          id="formGroupExampleInput2"
          placeholder="Minimum 6 characters"
          onChange={(event) => {
            setStudentPWD(event.target.value); //get password from front-end and assign to variable
          }}
        />
      </div>
      <button
        type="button"
        class="btn btn-success addStdBtn"
        onClick={sendStudentData}
        style={{ backgroundColor: "orange", borderStyle: "none" }}
      >
        Add Student
      </button>
    </div>
  );
}

export default AddStudent;
