import React, { useState } from "react";
import axios from "axios";
import "../css/feedbackForm.css";
import { Link } from "react-router-dom";

function FeebackForm() {
  //set 4 variables to store feedback form data
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  function sendFeedbackData(event) {
    event.preventDefault(); //prevent default behavoiur of submit button

    if (username == "" || description == "") {
      alert("Please Fill Required Fields !");
    }
    else {
      //create a object to pass feedback details to backend
      const newFeedback = {
        username,
        phoneNumber,
        email,
        description,
      };

      axios
        .post("http://localhost:8070/feedback/addFeedback", newFeedback)
        .then((res) => {
          console.log(res);
          
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  return (
    <div className="feedback-div">
      <h4 className="feeback-topic">Enter Your Feedback Here</h4>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label"></label>
        User's Name - Required
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter you name here"
          required
          onChange={(event) => {
            setUsername(event.target.value); //get username and assign to a variable
          }}
        />
      </div>

      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label"></label>
        Phone Number (Optional)
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your phone number here"
          onChange={(event) => {
            setPhoneNumber(event.target.value); //get phone number and assign to a variable
          }}
        />
      </div>

      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address (Optional)
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={(event) => {
            setEmail(event.target.value); //get email and assign to a variable
          }}
        />
      </div>

      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Discription - Required
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          required
          placeholder="Enter your feedback description here"
          onChange={(event) => {
            setDescription(event.target.value); //get description and assign to a variable
          }}
        ></textarea>
      </div>

      <Link to={"allFeedbacks"}>
        <button
          type="button"
          className="btn btn-success feedback-btn"
          style={{ backgroundColor: "green", borderStyle: "none" }}
          onClick={sendFeedbackData}
        >
          Submit Feedback
        </button>
      </Link>
    </div>
  );
}

export default FeebackForm;
