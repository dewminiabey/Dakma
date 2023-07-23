import React from "react";
import { Link } from "react-router-dom";
import '../css/manageStudents.css';

export default function ManageStudents() {
  return (
    <div className="all">
        <br></br>
        <h3 className="manageStd">Manage Students</h3> <br></br><br></br><br></br>
        <div className="allbtns">
            <button className="btn btn-success managestdbtn" >Add Student</button>
            <button className="btn btn-success managestdbtn" >Update Student</button>
            <button className="btn btn-success managestdbtn" >Update Student Password</button>
            <Link to="/deleteStudent"><button className="btn btn-success managestdbtn" >Delete Student </button></Link>
            <Link to="/allStudents"><button className="btn btn-success managestdbtn" >View All Students</button></Link>
        </div>
        
    </div>
  )
}
