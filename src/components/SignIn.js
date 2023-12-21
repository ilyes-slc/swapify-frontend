import React, { useState, useEffect } from 'react';
import './SignIn.css';
import AuthService from "../services/auth.service";

function SignIn(props) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const toggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  useEffect(() => {
    // Add an ID to the body element when SignIn component mounts
    document.body.id = 'signin-body';

    // Remove the ID when the component unmounts
    return () => {
      document.body.removeAttribute('id');
    };
  }, []);

  const registerAction = (e) => {
    e.preventDefault();
    if (isSignUp) {
      //console.log('this is sign up '+ username)
      AuthService.register(
          username,
          email,
          password
      ).then(
          response => {
            alert(response.data.message);
          },
          error => {
            const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            alert(resMessage);
          }
      );
    } else {
      console.log('this is sign in '+ email)
      AuthService.login(email, password).then(
          () => {
            alert('to fixxxxx , reload manually to continue');
          },
          error => {
            const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            alert(resMessage);
          }
      );
    }
  }

  return (
    <div id="signin" className={`container1 ${isSignUp ? 'active' : ''}`}>
      <div className={`form-container ${isSignUp ? 'sign-up' : 'sign-in'}`}>
        <form onSubmit={registerAction}>
          <h1>{isSignUp ? 'Create Account' : 'Sign In'}</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          {isSignUp ? (
            <span>or use your email for registration</span>
          ) : (
            <span>or use your email password</span>
          )}
          {isSignUp && <input type="text"
                              placeholder="username"
                              value={username}
                              onChange={onChangeUsername}
          />}
          <input type="email"
                 placeholder="Email"
                 value={email}
                 onChange={onChangeEmail}
          />
          <input type="password"
                 placeholder="Password"
                 value={password}
                 onChange={onChangePassword}
          />
          {isSignUp && <button >Sign Up</button>}
          {!isSignUp && (
            <React.Fragment>
              <a href="#">Forget Your Password?</a>
              <button>Sign In</button>
            </React.Fragment>
          )}
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className={`toggle-panel toggle-left ${isSignUp ? 'active' : ''}`}>
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of the site features</p>
            <button className="hidden" onClick={toggleForm} id="login">
              Sign In
            </button>
          </div>
          <div className={`toggle-panel toggle-right ${isSignUp ? '' : 'active'}`}>
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of the site features</p>
            <button className="hidden" onClick={toggleForm} id="register">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
