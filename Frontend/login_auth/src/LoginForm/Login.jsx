import React from "react";
import '../LoginForm/LoginSignUp.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

function Login() {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");

    // Perform login request (change endpoint to your login route)
    axios.post('http://localhost:3000/api/users/login', { email, password })
      .then(result => {
        console.log(result); // Log the result to check the data returned
        if (result.data.token) {
          // Store token in localStorage
          console.log("JWT Token:", result.data.token);
          localStorage.setItem('token', result.data.token);
          console.log("Token saved to localStorage");
          localStorage.setItem('username', result.data.username); 
          // Optionally save the username (if returned by backend)
          if (result.data.username) {
            localStorage.setItem('username', result.data.username);
            console.log("Username saved to localStorage");
          }

          // Navigate to home page after successful login
          navigate('/home');
        } else {
          console.log("Error: No token received.");
        }
      })
      .catch(err => {
        console.log("Error during login:", err); // Log errors during login
      });
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="">
          <a href="">About Us</a>
          <Link to='/register'>Sign Up</Link>
        </div>
      </div>
      <div className="container">
        <div className="div1">
          <img src="../../Downloads/Screenshot_2024-11-07_213624-removebg.png" alt="" />
        </div>
        <div className="div2">
          <div className="login">
            <h2>{action}</h2>
            <form onSubmit={handleSubmit}>
              <input
                className="field"
                type="email"
                name="email"
                placeholder="Enter your email here"
                onChange={(e) => setEmail(e.target.value)} />
              <input
                className="field"
                type="password"
                name="password"
                placeholder="Enter your password here"
                onChange={(e) => setPassword(e.target.value)} />
              <input className="button" type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
