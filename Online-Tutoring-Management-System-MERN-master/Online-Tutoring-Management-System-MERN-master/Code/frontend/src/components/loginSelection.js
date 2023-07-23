import React from "react";
import "../css/loginSelection.css";
import student from "../images/student.jpg";
import staff from "../images/staff.jpg";
import teacher from "../images/teacher.jpg";
import admin from "../images/admin.jpg";
import { Link } from "react-router-dom";

function loginSelection() {
  return (
    <div class="card-group card-group1">

      <div class="card card-1">
        <Link to="/studentLogin"> <img src={student} class="card-img-top" alt="..." /> </Link>
        <div class="card-body">
      <h4 class="card-title">Login as Student</h4>
        </div> 
      </div>
      
      <div class="card card-1">
        <Link to="/teacherLogin"><img src={teacher} class="card-img-top" alt="..." /> </Link>
        <div class="card-body">
        <h4 class="card-title">Login as Teacher</h4>
        </div>
      </div>

      <div class="card card-1">
        <Link to="/staffLogin"> <img src={staff} class="card-img-top" alt="..." /> </Link>
        <div class="card-body">
        <h4 class="card-title">Login as Staff</h4>     
        </div>
      </div>

      <div class="card card-1">
        <Link to="/adminLogin"> <img src={admin} class="card-img-top" alt="..." /> </Link>  
        <div class="card-body">
       <h4 class="card-title">Login as Administrator</h4>      
        </div>
      </div>

    </div>
  );
}

export default loginSelection;
