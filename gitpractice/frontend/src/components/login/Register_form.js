import React from 'react'
import { useState, useEffect } from "react";
import Axios from "axios";

function Register() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm_Password, setconfirm_Password] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const writeUser = () => {
    Axios.post("http://localhost:3001/writeUser", {
      name,
      email,
      password,
      confirm_Password,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          email,
          password,
          confirm_Password,
        },
      ]);
    });
  };

  return (
    <div>
      {/* <div className="UsersDisplay">
        {listOfUsers.map((user) => {
          return (
            // <div>
            //   <h1>name: {user.name}</h1>
            //   <h1>email: {user.email}</h1>
            //   <h1>password: {user.password}</h1>
            //   {/* <h1>Confirm password: {user.confirm_Password}</h1>
            // </div>
          );
        }
        )};
     </div> */}
      <div>
        <input
          type="text"
          placeholder="name..."
          onChange={(event) => {
            setname(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="emailid..."
          onChange={(event) => {
            setemail(event.target.value);
          }}
        />
        <input 
          type="text"
          placeholder="password..."
          onChange={(event) => {
            setpassword(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Confirm password..."
          onChange={(event) => {
            setconfirm_Password(event.target.value);
          }}
        />
        {password===confirm_Password}
        <button onClick={writeUser}> Create User </button>
      </div>
    </div>
);}

export default Register