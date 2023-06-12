import React, { useState } from "react";
import LogInForm from "./LogInForm/LogInForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import "./landing.css";
import { AnimatePresence } from "framer-motion";
import logo from '../photos/beat_blend_logo_1_transparent.png'

const Landing = () => {
  const [signUp, setSignUp] = useState(true);

  const logInClicked = () => {
    if (!signUp) {
      return;
    }
    if (signUp) {
      setSignUp(false);
    }
  };

  const signUpClicked = () => {
    if (signUp) {
      return;
    }
    if (!signUp) {
      setSignUp(true);
    }
  };

  return (
    <div className="mainContainer">
      {/* <img class='logo' src={logo} /> */}
      <div className="inputContainer">
        <div className="buttons">
          <div
            className={signUp ? "btn active" : "btn"}
            onClick={() => {
              signUpClicked();
            }}
          >
            Sign Up
          </div>
          <img class='logo' src={logo} />
          <div
            className={signUp ? "btn" : "btn active"}
            onClick={() => {
              logInClicked();
            }}
          >
            Log In
          </div>
        </div>
        <AnimatePresence mode="wait">
          {signUp ? <SignUpForm /> : <LogInForm />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Landing;
