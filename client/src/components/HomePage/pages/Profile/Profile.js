import React, { useState } from "react";
import "./profile.css";
import pfp from "../../../photos/pfp placeholder.png";
import Posts from "./Posts/Posts";
import MyRecordings from "./myRecordings/myRecordings";


const Profile = () => {
  const [botHalf, setBotHalf] = useState("Posts");

  const botHalfRender = () => {
    if (botHalf === "Posts") {
      return <Posts />;
    }
    if (botHalf === "myRecordings") {
      return <MyRecordings />;
    }

  };

  const handleBotHalfChange = (prop) => {
    setBotHalf(prop);
  };

  return (
    <>
      <div className="profileHeader">Your Profile</div>
      <div className="mainProfileContainer">
        <div className="userProfileInfo">
          <img className="profilePfp" src={pfp}></img>
          <div className="profileName">FName LName</div>
          <div className="profileUsername">@username</div>
          <p className="profileBio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="profileButtons">
          <div
            className={botHalf === "Posts" ? "profileBtn active" : "profileBtn"}
            onClick={() => handleBotHalfChange("Posts")}
          >
            Posts
          </div>
          <div
            className={
              botHalf === "myRecordings" ? "profileBtn active" : "profileBtn"
            }
            onClick={() => handleBotHalfChange("myRecordings")}
          >
            My Recordings
          </div>
        </div>
        {botHalfRender()}
      </div>
    </>
  );
};

export default Profile;
