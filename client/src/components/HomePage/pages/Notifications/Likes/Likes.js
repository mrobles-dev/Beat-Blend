import React from "react";
import "./likes.css";
import pfp from '../../../../photos/pfp placeholder.png'

const Likes = () => {
  return (
    <>
      <div className="mainLikesContainer">
        <div className="likes">
          <div className="likeElement">
            <div className="likeUserInfo">
              <img className='likePfp' src={pfp} />
              <div className="likeUsername">@username liked your post! <strong>[post link (maybe embed if we're cool?)]</strong></div>
            </div>
          </div>
          <div className="closer">
            <i>That is the end of your list of likes. Make posts to get more likes and they will appear here!</i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Likes;
