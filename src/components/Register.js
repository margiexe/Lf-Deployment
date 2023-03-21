import React, {useState, useEffect} from "react"
// import Header from "../components/Header/Header"
// import './Register.css';
import {Link, useNavigate, useLocation} from "react-router-dom"
import axios from "axios"

const Register = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [name, setName] = React.useState("")

  const handleClick = (event) => {
    event.preventDefault()
    console.log(email, password, name)

    axios
      .post("http://127.0.0.1:5000/signup", {
        email: email,
        password: password,
        // Here for role, add the role of the user instead of "user".
        role: "user",
        name: name,
      })
      .then((response) => {
        console.log(response.data)
        alert("User registered")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const handleName = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handlePassword = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  // const handleDescription = (e) => {
  //   e.preventDefault()
  //   setPassword(e.target.value)
  // }

  // const handleDomain = (e) => {
  //   e.preventDefault()
  //   setPassword(e.target.value)
  // }
  // const handlePlace = (e) => {
  //   e.preventDefault()
  //   setPassword(e.target.value)
  // }

  return (
    <>
      {/* <Header /> */}
      <div className="register-page">
        <p className="register-heading">Register</p>
        <div className="">
          <label className="for-email" htmlFor="email">
            Email Address
          </label>
          <br />
          <input type="text" id="email" onChange={handleEmail} name="email" />
          <div className="">
            <label htmlFor="password">password</label>
            <br />
            <input
              type="text"
              id="password"
              onChange={handlePassword}
              name="password"
            />
          </div>

          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" onChange={handleName} name="name" />
          <br />

          <label htmlFor="Description">description</label>
          <br />
          {/* <input type="text" id="description" onChange={handleDescription} name="description" /> */}
          <input type="text" id="description" name="description" />
          <br />
          <label htmlFor="Register">Register</label>
          <br />
          <input type="file" id="photo" />
          <br />
          <button id="upload" onclick="uploadImage()">
            Upload Image
          </button>
          <br />

          <label htmlFor="Domain">domain</label>
          <br />
          {/* <input type="text" id="domain" onChange={handleDomain} name="domain" /> */}
          <input type="text" id="domain" name="domain" />
          <br />

          <label htmlFor="place">place</label>
          <br />
          {/* <input type="text" id="place" onChange={handlePlace} name="place" /> */}
          <input type="text" id="place" name="place" />
          <br />

          <div className="Submit-button">
            <button type="button" onClick={handleClick}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
