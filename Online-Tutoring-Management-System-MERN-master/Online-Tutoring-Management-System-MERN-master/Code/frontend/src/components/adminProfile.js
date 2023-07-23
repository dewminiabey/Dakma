import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function AdminProfile(){

    const[admin, setAdmin] = useState([]);

    useEffect(() => {
        
            axios.get("http://localhost:8070/admin/viewAdmin").then((res) => {
                setAdmin(res.data);
                 
            }).catch((err) => {
               alert(err);
            })
       
    },[])

    return(
        <div>
            {admin?.map((adminData) => (
                <div key={adminData._id}>
        
                <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold"></span></div>
            </div>
            <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="text-right">Administrator's Profile</h4>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6"><label className="labels">First Name</label><input type="text" className="form-control" defaultValue={adminData.fName} readOnly /></div>
                        <div className="col-md-6"><label className="labels">Last Name</label><input type="text" className="form-control" defaultValue={adminData.lName} readOnly/></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12"><label className="labels">User ID</label><input type="text" className="form-control"  defaultValue={adminData.userID} readOnly/></div>
                        <div className="col-md-12"><label className="labels">Address </label><input type="text" className="form-control" defaultValue={adminData.address} readOnly/></div>
                        {/* <div className="col-md-12"><label className="labels">Birth Date</label><input type="text" className="form-control" defaultValue={adminData.birthDate} readOnly/></div> */}
                        <div className="col-md-12"><label className="labels">Mobile</label><input type="text" className="form-control" defaultValue={adminData.mobile} readOnly/></div>
                        <div className="col-md-12"><label className="labels">E-mail</label><input type="text" className="form-control" defaultValue={adminData.email} readOnly/></div>
                        <div className="col-md-12"><label className="labels">NIC</label><input type="text" className="form-control" defaultValue={adminData.NIC} readOnly/></div>
                    </div>               
                </div>
            </div>
        </div>
    </div>
    </div>
                
            ))}

</div>

        
)
}

export default AdminProfile;