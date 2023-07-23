import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function UpdateAdminProfile() {
  //fetch admin's currnt details
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/admin/viewAdmin")
      .then((res) => {
        setAdmin(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  //store update values in variables
  const [fName, setfName] = useState(admin.fName);
  const [lName, setlName] = useState(admin.lName);
  const [userID, setuserID] = useState(admin.userID);
  const [address, setaddress] = useState(admin.address);
  const [birthDate, setbirthDate] = useState(admin.birthDate);
  const [mobile, setmobile] = useState(admin.mobile);
  const [email, setemail] = useState(admin.email);
  const [NIC, setNIC] = useState(admin.NIC);

  function UpdateAdminProfile2(event) {
    event.preventDefault();

    //create object including updated details
    const updatedDetails = {
      fName,
      lName,
      userID,
      address,
      birthDate,
      mobile,
      email,
      NIC,
    };

    //update the database
    axios
      .put("http://localhost:8070/admin/updateAdmin", updatedDetails)
      .then(() => {
        alert("Details Updated Successfully !");
        console.log(updatedDetails);
      })
      .catch((err) => {
        console.log(err);
        alert("Update Unsuccessfull !");
      });
  }

  return (
    <div>
      {admin?.map((adminData) => (
        <div key={adminData._id}>
          <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
              <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img
                    className="rounded-circle mt-5"
                    width="150px"
                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  />
                  <span className="font-weight-bold"></span>
                </div>
              </div>
              <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="text-right">Update Your Profile</h3>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="labels">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        defaultValue={adminData.fName}
                        onChange={(event) => {
                          setfName(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="labels">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={adminData.lName}
                        onChange={(event) => {
                          setlName(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="labels">User ID</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={adminData.userID}
                        readOnly
                        onChange={(event) => {
                          setuserID(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-12">
                      <label className="labels">Address </label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        defaultValue={adminData.address}
                        onChange={(event) => {
                          setaddress(event.target.value);
                        }}
                      />
                    </div>

                    {/* <div className="col-md-12">
                      <label className="labels">Birth Date</label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        defaultValue={adminData.birthDate}
                        onChange={(event) => {
                          setbirthDate(event.target.value);
                        }}
                      />
                    </div> */}

                    <div className="col-md-12">
                      <label className="labels">Mobile</label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        defaultValue={adminData.mobile}
                        onChange={(event) => {
                          setmobile(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-12">
                      <label className="labels">E-mail</label>
                      <input
                        type="email"
                        className="form-control"
                        required
                        defaultValue={adminData.email}
                        onChange={(event) => {
                          setemail(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-12">
                      <label className="labels">NIC</label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        defaultValue={adminData.NIC}
                        onChange={(event) => {
                          setNIC(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="mt-5 text-center">
                    <button
                      class="btn btn-primary profile-button"
                      onClick={UpdateAdminProfile2}
                      type="button"
                    >
                      Save Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpdateAdminProfile;
