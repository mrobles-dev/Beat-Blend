import React, { useState } from "react";
import HeaderNav from "../Header/HeaderNav";
import "./homePage.css";
import Feed from "./pages/Feed/Feed";
import Profile from "./pages/Profile/Profile";
import pfp from "../photos/pfp placeholder.png";
import Notifications from "./pages/Notifications/Notifications"
import Search from './pages/Search/Search'

const HomePage = () => {
  const [length, setLength] = useState(0);
  function countLength() {
    const textarea = document.getElementById("textInput");
    var string = textarea.value;
    setLength(string.length);
  }

  const [page, setPage] = useState("Feed");

  const renderMiddle = () => {
    if (page === "Feed") {
      return <Feed />;
    }
    if (page === "Profile") {
      return <Profile />;
    }
    // if (page === 'Recording') {
    //   return <Recording />
    // }
    // if (page === 'Favorites') {
    //   return <Favorites />
    // }
    if (page === 'Notifications') {
      return <Notifications />
    }
    if (page === 'Search') {
      return <Search />
    }
    // if (page === 'Settings') {
    //   return <Settings />
    // }

  };

  const handlePageChange = (pageName) => {
    setPage(pageName);
  };

  return (
    <>
      <HeaderNav />
      <div className="mainHomeContainer">
          {/* LEFT NAVIGATION */}
        <div className="leftContainer">
          {" "}
          <div className="navHeader">Navigation</div>
          <ul>
            <li className="listEle">
              <div
                onClick={() => handlePageChange("Feed")}
                className={
                  page === "Feed" ? "navContent activeNav" : "navContent"
                }
              >
                <div className="navLink">Feed</div>
              </div>
            </li>
            <li className="listEle">
              <div
                onClick={() => handlePageChange("Profile")}
                className={
                  page === "Profile" ? "navContent activeNav" : "navContent"
                }
              >
                <div className="navLink">Profile</div>
              </div>
            </li>
            <li className="listEle">
              <div
                onClick={() => handlePageChange("Recording")}
                className={
                  page === "Recording" ? "navContent activeNav" : "navContent"
                }
              >
                <div className="navLink">Recordings</div>
              </div>
            </li>
            <li className="listEle">
              <div
                onClick={() => handlePageChange("Favorites")}
                className={
                  page === "Favorites" ? "navContent activeNav" : "navContent"
                }
              >
                <div className="navLink">Favorites</div>
              </div>
            </li>
            <li className="listEle">
              <div
                onClick={() => handlePageChange("Notifications")}
                className={
                  page === "Notifications"
                    ? "navContent activeNav"
                    : "navContent"
                }
              >
                <div className="navLink">Notifications</div>
              </div>
            </li>
            <li className="listEle">
              <div
                onClick={() => handlePageChange("Search")}
                className={
                  page === "Search" ? "navContent activeNav" : "navContent"
                }
              >
                <div className="navLink">Search</div>
              </div>
            </li>
            <li className="listEle">
              <div
                onClick={() => handlePageChange("Settings")}
                className={
                  page === "Settings" ? "navContent activeNav" : "navContent"
                }
              >
                <div className="navLink">Settings</div>
              </div>
            </li>
          </ul>
        </div>
        {/* MAIN MIDDLE FEED */}
        <div className="middleContainer">
          {" "}
          {/* changing */}
          {renderMiddle()}
        </div>
        {/* RIGHT CONTAINER */}
        <div className="rightContainer">
          <div className="newPostHeader">New Post</div>
          <div className="formContainer">
            <div className="topBar">
              <div className="userInfo">
                <img className="pfp" src={pfp} alt="profile"></img>
                <div className="username">@you</div>
              </div>
            </div>
            {/* TEXT INPUT */}
            <form className="form">
              <p>
                <span className={length > 200 ? "red" : "green"}>{length}</span>
                /200
              </p>
              <textarea
                id="textInput"
                placeholder="Type your message here... (200 char max)"
                onChange={countLength}
                rows="4"
              />
            </form>
            {/* UPLOAD CONTAINER */}
            <div className="uploadContainer">
              <div className="upload postBtn">Upload Audio</div>
              <div className="upload postBtn">Monetize?</div>
            </div>
            <div className="post bigPostBtn">Post!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
