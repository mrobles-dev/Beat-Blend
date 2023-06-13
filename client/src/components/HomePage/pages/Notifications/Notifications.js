import React, { useState } from "react";
import "./notifications.css";
import Likes from "./Likes/Likes";
import Comments from "./Comments/Comments";

const Notifications = () => {
  const [likesComments, setLikesComments] = useState("Likes");

  const renderLikesComments = () => {
    if (likesComments === "Likes") {
      return <Likes />;
    }
    if (likesComments === "Comments") {
      return <Comments />;
    }
  };

  return (
    <>
      <div className="notificationHeader">Your Notifications</div>
      <div className="mainNotificationContainer">
        <div className="notificationButtons">
          <div
            className={
              likesComments === "Likes"
                ? "active notificationBtn"
                : "notificationBtn"
            }
            onClick={() => setLikesComments("Likes")}
          >
            Likes
          </div>
          <div
            className={
              likesComments === "Comments"
                ? "active notificationBtn"
                : "notificationBtn"
            }
            onClick={() => setLikesComments("Comments")}
          >
            Comments
          </div>
        </div>
        {renderLikesComments()}
      </div>
    </>
  );
};

export default Notifications;
