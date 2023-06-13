import React, { useState } from "react";
import pfp from "../../../photos/pfp placeholder.png";
import pfpNav from "../../../photos/pfp nav.png";
import play from "../../../photos/play button.png";
import playBar from "../../../photos/play bar.png";
import download from "../../../photos/download.png";
import heart from "../../../photos/heart.png";
import liked from "../../../photos/heart full.png";

const Posts = () => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    if (!like) {
      setLike(true);
    }
    if (like) {
      setLike(false);
    }
  };
  return (
    <>
        <div className="feedElement">
          <div className="topBar">
            <div className="userInfo">
              <img className="pfp" src={pfp}></img>
              <div className="username">@username | 1h</div>
            </div>
            <div className="likeBtn">
              <img
                className="heart"
                onClick={handleLike}
                src={!like ? heart : liked}
              />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="recordingContainer">
            <img className="playBtn" src={play} />
            <img className="playBar" src={playBar} />
            <img className="download" src={download} />
          </div>
        </div>
        <div className="feedElement">
          <div className="topBar">
            <div className="userInfo">
              <img className="pfp" src={pfp}></img>
              <div className="username">@username | 1h</div>
            </div>
            <div className="likeBtn">
              <img
                className="heart"
                onClick={handleLike}
                src={!like ? heart : liked}
              />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="recordingContainer">
            <img className="playBtn" src={play} />
            <img className="playBar" src={playBar} />
            <img className="download" src={download} />
          </div>
        </div>
        <div className="feedElement">
          <div className="topBar">
            <div className="userInfo">
              <img className="pfp" src={pfp}></img>
              <div className="username">@username | 1h</div>
            </div>
            <div className="likeBtn">
              <img
                className="heart"
                onClick={handleLike}
                src={!like ? heart : liked}
              />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="recordingContainer">
            <img className="playBtn" src={play} />
            <img className="playBar" src={playBar} />
            <img className="download" src={download} />
          </div>
        </div>
        <div className="feedElement">
          <div className="topBar">
            <div className="userInfo">
              <img className="pfp" src={pfp}></img>
              <div className="username">@username | 1h</div>
            </div>
            <div className="likeBtn">
              <img
                className="heart"
                onClick={handleLike}
                src={!like ? heart : liked}
              />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="recordingContainer">
            <img className="playBtn" src={play} />
            <img className="playBar" src={playBar} />
            <img className="download" src={download} />
          </div>
        </div>
        <div className="feedElement">
          <div className="topBar">
            <div className="userInfo">
              <img className="pfp" src={pfp}></img>
              <div className="username">@username | 1h</div>
            </div>
            <div className="likeBtn">
              <img
                className="heart"
                onClick={handleLike}
                src={!like ? heart : liked}
              />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="recordingContainer">
            <img className="playBtn" src={play} />
            <img className="playBar" src={playBar} />
            <img className="download" src={download} />
          </div>
        </div>
    </>
  );
};

export default Posts;
