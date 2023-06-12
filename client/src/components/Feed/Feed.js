import React, { useState } from "react";
import HeaderNav from "../Header/HeaderNav";
import "./feed.css";
import pfp from "../photos/pfp placeholder.png";
import play from "../photos/play button.png";
import playBar from "../photos/play bar.png";
import download from "../photos/download.png";
import heart from "../photos/heart.png";
import liked from "../photos/heart full.png";

const Feed = () => {
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
      <HeaderNav />
      <div className="mainFeedContainer">
        <div className="leftContainer">
          <br />
        </div>
        <div className="middleContainer">
          <div className="feedHeader">Your Feed</div>
          <div className="feed">
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="recordingContainer">
                <img className="playBtn" src={play} />
                <img className="playBar" src={playBar} />
                <img className="download" src={download} />
              </div>
            </div>
          </div>
        </div>
        <div className="rightContainer">
          <br />
        </div>
      </div>
    </>
  );
};

export default Feed;
