import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogInForm from "./LogInForm/LogInForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import "./landing.css";
import { AnimatePresence } from "framer-motion";
import logo from '../photos/beat_blend_logo_1_transparent.png'
import AuthService from "../../utils/auth";

const LandingPage = () => {
  const [signUp, setSignUp] = useState(true);
  const navigate = useNavigate();

  const handleSignUp = async (formData) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const { token } = await response.json();
        AuthService.login(token);
        navigate("/home");
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogIn = async (formData) => {
    console.log(formData); //! REMOVE
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Response data:", responseData); //! REMOVE
        const { token } = responseData;
        localStorage.setItem("token", token);
        AuthService.login(token);
        navigate("/home");
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logInClicked = () => {
    if (!signUp) {
      return;
    }
    setSignUp(false);
  };

  const signUpClicked = () => {
    if (signUp) {
      return;
    }
    setSignUp(true);
  }

  return (
    <div className="mainContainer">
      <div className="inputContainer">
        <div className="buttons">
          <div
            className={signUp ? "btn active" : "btn"}
            onClick={signUpClicked}
          >
            Sign Up
          </div>
          <img className="logo" src={logo} alt="Beat Blend Logo" />
          <div
            className={!signUp ? "btn active" : "btn"}
            onClick={logInClicked}
          >
            Log In
          </div>
        </div>
        <AnimatePresence>
          {signUp ? (
            <SignUpForm handleSignUp={handleSignUp} />
          ) : (
            <LogInForm handleLogIn={handleLogIn} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LandingPage;
