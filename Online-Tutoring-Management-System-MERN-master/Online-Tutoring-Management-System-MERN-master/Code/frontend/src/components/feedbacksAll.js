import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/allFeedbacks.css";
import { Link } from "react-router-dom";

export default function AllFeedback() {
  const [feedbaks, setFeedbacks] = useState([]);

  useEffect(() => {
    function getFeedbacks() {
      axios
        .get("http://localhost:8070/feedback/")
        .then((res) => {
          setFeedbacks(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getFeedbacks();
  }, []);

  return (
    <div>
      <div className="container">
        <h3 className="all-feedbacks">All Feedbacks</h3>
        <Link to="addFeedback">
          <button className="btn btn-success">Add New Feedback</button>{" "}
        </Link>
        <br></br><br></br>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">User Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
        </table>
        {feedbaks?.map((feedbackData) => (
          <div className="container" key={feedbackData._id}>
            <table class="table feedback">
              <thead class="thead-dark">
              </thead>
              <tbody>
                <tr>
                  <td>{feedbackData.username}</td><td>{""}</td>
                  <td>{feedbackData.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
