import React from 'react'
import { useState, useEffect } from "react";
import Axios from "axios";

function Testimonials() {
  const [listOfReviews, setListOfReviews] = useState([]);
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [role, setRole] = useState("");
  const [date_posted, setDate_posted] = useState("");


  useEffect(() => {
    Axios.get("http://localhost:3001/getReviews").then((response) => {
      setListOfReviews(response.data);
    });
  }, []);

  const writeReview = () => {
    Axios.post("http://localhost:3001/writeReview", {
      description,
      author,
      role,
      date_posted,
    }).then((response) => {
      setListOfReviews([
        ...listOfReviews,
        {
          description,
          author,
          role,
          date_posted,
        },
      ]);
    });
  };

  return (
    <div>
      <div className="reviewsDisplay">
        {listOfReviews.map((user) => {
          return (
            <div>
              <h1>Description: {user.description}</h1>
              <h1>Author: {user.author}</h1>
              <h1>Role: {user.role}</h1>
              <h1>Date: {user.date_posted}</h1>
            </div>
          );
        })}
      </div>

      <div>
        <input
          type="textarea"
          placeholder="Description..."
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Author..."
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Role..."
          onChange={(event) => {
            setRole(event.target.value);
          }}
        />
        <input
          type="date"
          placeholder="Date..."
          onChange={(event) => {
            setDate_posted(event.target.value);
          }}
        />
        <button onClick={writeReview}> Create User </button>
      </div>
    </div>
  );
}

export default Testimonials