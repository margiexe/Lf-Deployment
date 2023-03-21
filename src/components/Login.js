import React, {useEffect, useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import "./Login.css"
import axios from "axios"

const Login = () => {
  const navigate = useNavigate()
  const [popupStyle, showPopup] = useState("hide")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")

  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
  }

  const onSuccess = (e) => {
    alert("User signed in")
    console.log(e)
  }

  const onFailure = (e) => {
    alert("User sign in Failed")
    console.log(e)
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleRole = (e) => {
    setRole(e.target.value)
  }

  const handleLogin = () => {
    axios
      .post("http://127.0.0.1:5000/login", {
        email: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data)
        if (response.data.role === "p") {
          navigate("/user")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder="username" onChange={handleUsername} />
      <input type="password" placeholder="password" onChange={handlePassword} />

      <div className="login-btn" onClick={handleLogin}>
        Login
      </div>
      <Link to="/registerStartup">
        <button className="vvd">
          <span>New User Signup Here</span>
        </button>
      </Link>

      {/* <div className="alt-login">
                <div className="facebook"></div>
                <div className="google">
                    <GoogleLogin className="blue"
                        clientId="79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com"
                        buttonText=""
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={false} // alternative is true, which keeps the user signed in
                        icon={false}    // alt is true, and this puts the google logo on your button, but I don't like it
                        theme="dark"  // alternative is light, which is white
                    />
                </div>
            </div> */}

      {/* <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div> */}
    </div>
  )
}

export default Login
