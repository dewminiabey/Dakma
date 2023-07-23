import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/adminDashbord.css';
import profilePhoto from '../images/profile_photo.png';
import Calender from './calender'


function AdminDashbord(){ 
    return(
    
        <div className="admin-dashbord"> <br></br>
    
            <h3 className="admin-topic">Administrator's Dashboard</h3> <hr/>
            <div className="profile-things">
                <h3></h3>
            <Calender></Calender>
            </div>

            <div className="overview">
                <h4>Profile Management</h4>
               <img src={profilePhoto} alt="profile Image" width={"60px"} className="profile-img"/> <br/> <br/>
               <h6 className="you-logged-in">You Logged in as, <br></br> Administrator</h6>
               <button onClick={logoutConfirm} className="btn btn-success admin-btn">Log Out</button > <br/>
               {/* <Link to="/adminProfile"> <button className="btn btn-success admin-btn">View Full Profile</button> </Link> <br/> */}
               <Link to="/updateAdmin"><button className="btn btn-success admin-btn">Full Profile</button> </Link> <br/>
               <button className="btn btn-success admin-btn">Change Password</button> <br/>
            </div>

            <div className="user-management">
                <h4>User Management</h4>
                <Link to="/manageStudents"> <button className="btn btn-success admin-btn">Manage Students</button></Link>
                <button className="btn btn-success admin-btn">Manage Teachers</button>
                <button className="btn btn-success admin-btn">Manage Staff</button>
                <button className="btn btn-success admin-btn">Financial Report</button>
                {/* <Link to="/allStudents"><button className="btn btn-success admin-btn">All Students</button></Link> */}

            </div>
        </div>
    )
}

function logoutConfirm(){
    {
    let res = window.confirm("Are You Sure Want To Logout")
 
    if(res){
     window.location = "/"
    }
    }
 }


export default AdminDashbord;