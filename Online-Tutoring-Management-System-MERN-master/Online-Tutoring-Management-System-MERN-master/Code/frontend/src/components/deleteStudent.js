import React, { useState } from "react";
import axios from "axios";

function DeleteStudent() {

    const [username, setStudentID] = useState("");
    function deleteStudentData(event) {
    let res = window.confirm("Are you sure to delete this user ?")

    if(res){
      event.preventDefault();
      const deleteStudent = {
          username
      };
      console.log(deleteStudent);

      axios
      .delete("http://localhost:8070/student/deleteStudent", deleteStudent)
      .then(() => {
          alert("Student deleted");
      }).catch((err) => {
          alert("Student Deletion Unsuccessfull");
      })
    }

       
    }

  return (
    <div className="updateStudentPassword" style={{ margineLeft: "0%" }}>
      <h3 style={{ textAlign: "center" }}>Delete Student</h3>{" "}
      <hr className="hLine" />
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">
          Student ID
        </label>
        <input
          type="text"
          className="form-control login-input"
          id="formGroupExampleInput"
          placeholder="STD0000"
          required
          onChange={(event) => {
            setStudentID(event.target.value);
          }}
        />
      </div>
      <br />

      <p style={{color: "red"}}>By deleting this profile, all the details related to this profile will be deleted !</p>
      <button
        type="button"
        class="btn btn-success"
        onClick={deleteStudentData}
      >
        Delete Student
      </button>
    </div>
  );
}

export default DeleteStudent;
