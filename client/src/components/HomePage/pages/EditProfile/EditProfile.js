import React, { useState } from "react";
import "./editProfile.css";
import pfp from "../../../photos/pfp placeholder.png";

const EditProfile = () => {
  const [privateAcc, setPrivateAcc] = useState("Public");

  const [length, setLength] = useState(0);
  function countLength() {
    const textarea = document.getElementById("textInput");
    var string = textarea.value;
    setLength(string.length);
  }

  return (
    <>
      <div className="settingsHeader">Edit Profile</div>
      <div className="mainSettingsContainer">
        <div className="pfpEdit">
          <img className="settingsPfp" src={pfp}></img>
          <button className="pfpChangeBtn">Update Image</button>
          <div className="bioContainer">
            <div className="settingLabel">Bio:</div>
            <p>
              <span className={length > 150 ? "red" : "green"}>{length}</span>
              /150
            </p>
            <textarea
              id="textInput"
              className="bioInput"
              type="text"
              placeholder="Enter Bio (150 char max)"
              onChange={countLength}
              rows="3"
            />
          </div>
        </div>
        <div className="settings">
          <div className="singleSetting">
            <div className="settingLabel">Name:</div>
            <input className="settingInput" placeholder="Enter a name" />
          </div>
          <div className="singleSetting">
            <div className="settingLabel">Username:</div>
            <input className="settingInput" placeholder="Enter a username" />
          </div>
          <div className="singleSetting">
            <div className="settingLabel">Email:</div>
            <input className="settingInput" placeholder="Enter a email" />
          </div>
          <div className="singleSetting">
            <div className="settingLabel">Password:</div>
            <input className="settingInput" placeholder="Enter a password" />
          </div>
          <div className="singleSetting">
            <div className="settingLabel">Private Account:</div>
            <div className="privateButtonsContainer">
              <div className="privateButton">
                <div
                  className={
                    privateAcc === "Public" ? "active privateBtn" : "privateBtn"
                  }
                  onClick={() => setPrivateAcc("Public")}
                >
                  Public
                </div>
              </div>
              <div className="privateButton">
                <div
                  className={
                    privateAcc === "Private"
                      ? "active privateBtn"
                      : "privateBtn"
                  }
                  onClick={() => setPrivateAcc("Private")}
                >
                  Private
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="saveBtn">Save</div>

      </div>
    </>
  );
};

export default EditProfile;
