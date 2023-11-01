import React, { useState } from "react";
import "./Auth.css"


export const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};

const Login = () => {
 
  

  return (
    <div className="auth-container">
      <form >
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
           
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            
          />
        </div>
        <Link  type="submit">Login</Link>
      </form>
    </div>
  );
};



const Register = () => {
  

  return (
    <div className="auth-container">
      <form >
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
          
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};