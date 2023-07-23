import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import '../css/allStudents.css'

export default function AllStudents(){

    const [students, setStudents] = useState([]);

    useEffect(()=>{
        function getStudents(){
            axios
            .get("http://localhost:8070/student/")
            .then((res)=>{
                setStudents(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        getStudents();
    },[]);

    let info = [];
      
    const pdfGen = () =>{
      {
        const doc = new jsPDF();
        doc.text("Student Details", 20,10);
        autoTable(doc, {
          head : [["Student ID", "Name", "Address", "NIC", "Mobile", "Email"]],
          body: info,
        });
        doc.save("students.pdf");
      }
    }

    return(
        <div>
        <div className="container">
        <h3 className="all-feedbacks">All Studnets</h3> <br></br>
        <button className="btn btn-success" onClick={pdfGen}>Download PDF</button>
        <br></br> <br></br> 
        <table class="table allStudents">
          <thead class="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Student ID</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">NIC</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th><td>{""}</td>
            </tr>
          </thead>
        </table>
        {students?.map((studentData) => (
          <div>
          {info.push([studentData.userID, studentData.name, studentData.address, studentData.NIC, studentData.mobile, studentData.email])}
          <div className="container" key={studentData._id}>          
           <table class="table allStudents">
             <thead class="thead-dark">
             </thead>
             <tbody>
               <tr>
                 <td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td>
                 <td>{studentData.userID}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td>
                 <td>{studentData.name}</td>
                 <td>{studentData.address}</td>
                 <td>{studentData.NIC}</td>
                 <td>{studentData.mobile}</td>
                 <td>{studentData.email}</td>
               </tr>
             </tbody>
           </table>
         </div>
          </div>
        ))}
      </div>
        </div>
    )
}

