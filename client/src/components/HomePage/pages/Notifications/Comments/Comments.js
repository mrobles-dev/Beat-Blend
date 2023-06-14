import React from "react";
import "./comments.css";
import pfp from "../../../../photos/pfp placeholder.png";

const Comments = () => {
  return (
    <>
      <div className="mainCommentsContainer">
        <div className="comments">
          <div className="commentElement">
            <div className="commentUserInfo">
              <img className="commentPfp" src={pfp} />
              <div className="commentUserText">
                <div className="commentUsername">
                  @username commented on your post!{" "}
                </div>
                <strong>[comment text in &lt;a&gt; tag to comment]</strong>
              </div>
            </div>
          </div>
          <div className="closer">
            <i>
              That is the end of your list of comments. Comments are a good way
              to connect with others, so make posts to get more comments and
              they will appear here!
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
