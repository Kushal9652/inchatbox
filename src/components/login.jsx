import React, { useState } from "react";
import "./login.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const LoginSignup = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return (
    <div className="login-container">
      {/* Background Boat and Waves Animation */}
      <div className="waves back">
        <svg viewBox="0 24 150 28">
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            ></path>
          </defs>
          <use xlinkHref="#gentle-wave" x="48" y="5"></use>
          <use xlinkHref="#gentle-wave" x="48" y="7"></use>
        </svg>
      </div>

      <div className="boat">
        <div className="sail1"></div>
        <div className="sail2"></div>
        <div className="hull"></div>
      </div>

      <div className="waves front">
        <svg viewBox="0 24 150 28">
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            ></path>
          </defs>
          <use xlinkHref="#gentle-wave" x="48" y="0"></use>
          <use xlinkHref="#gentle-wave" x="48" y="3"></use>
        </svg>
      </div>

      {/* Login/Signup Form */}
      <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`} id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1 id="InChatBox">Register</h1>
            <div className="input-icon">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Name" id="name" />
            </div>
            <div className="input-icon">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" id="mail" />
            </div>
            <div className="input-icon">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" id="pass" />
            </div>
            <button>Sign Up</button>
            <br /><br /><br /><br />
            <div className="social-container">
              <a href="https://www.facebook.com" className="social" id="fb">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com" className="social" id="ins">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.gmail.com" className="social" id="gm">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://www.twitter.com" className="social" id="tw">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" id="form1">
            <h1 id="sign">Sign In</h1>
            <div className="input-icon">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" id="mail" />
            </div>
            <div className="input-icon">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" id="pass" />
            </div>
            <button id="form_but">Login</button>
            <br /><br /><br /><br /><br /><br />
            <div className="social-container">
              <a href="https://www.facebook.com" className="social" id="fb">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com" className="social" id="ins">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.gmail.com" className="social" id="gm">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://www.twitter.com" className="social" id="tw">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <br />
              <p style={{ color: "rgb(0, 68, 255)" }}>Already have an account?</p>
              <button className="press" onClick={() => setIsRightPanelActive(false)}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 id='inchat'>InChatBox</h1>
              <p>One stop for all your needs!</p>
              <br />
              <p style={{ color: "rgb(0, 68, 255)" }}>Don't have an account?</p>
              <button className="press" onClick={() => setIsRightPanelActive(true)} style={{ color: "rgb(57, 49, 5)" }}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
