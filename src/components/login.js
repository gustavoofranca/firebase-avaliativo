import React from 'react';
import './login.css'; 

const Login = () => {
  return (
    <div className="login-box">
      <div className="login-header">
        <header>Login</header>
      </div>
      <div className="input-box">
        <input type="text" className="input-field" placeholder="Email" autocomplete="off" required/>
      </div>
      <div className="input-box">
        <input type="password" className="input-field" placeholder="Password" autocomplete="off" required/>
      </div>
      <div className="forgot">
        <section>
          <input type="checkbox" id="check"/>
            <label for="check">Remember me</label>
        </section>
        <section>
          <a href="#">Forgot password</a>
        </section>
      </div>
      <div className="input-submit">
        <button className="submit-btn" id="submit"></button>
        <label for="submit">Sign In</label>
      </div>
      <div className="sign-up-link">
        <p>Don't have account? <a href="#">Sign Up</a></p>
      </div>
    </div>
  );
}

export default Login;
