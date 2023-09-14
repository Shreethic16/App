import React, { useState } from 'react';
import '../Asset/CSS/Login.css';
import { Link } from 'react-router-dom';
function Loginpage() {
  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form-header">
          <h2> Login </h2>
        </div>
        <form className="login-form">
          <div className="form-group">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Password" required />
          </div>
          <div className="form-group">
          <button type="submit">Login</button>
          </div>
          <p>Don't have an account?<Link to = '/signup'><a href=" ">Signup</a></Link></p>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
