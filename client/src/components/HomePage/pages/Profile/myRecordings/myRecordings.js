import React from "react";
import "./myrecordings.css";
import playBar from '../../../../photos/small play bar.png'
import playBtn from '../../../../photos/play button.png'

const myRecordings = () => {
  return (
    <>
      <div className='mainRecordingContainer'>
        <div className="recordingElement">
          <div className="recordingTitle">
            Title
          </div>
          <div className="recordingDate">
            00/00/0000 | 00:00
          </div>
          <div className="recordingDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <img className="playButton" src={playBtn}/>
          <img className="playBar" src={playBar}/>
        </div>
        <div className="recordingElement">
          <div className="recordingTitle">
            Title
          </div>
          <div className="recordingDate">
            00/00/0000 | 00:00
          </div>
          <div className="recordingDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <img className="playButton" src={playBtn}/>
          <img className="playBar" src={playBar}/>
        </div>
        <div className="recordingElement">
          <div className="recordingTitle">
            Title
          </div>
          <div className="recordingDate">
            00/00/0000 | 00:00
          </div>
          <div className="recordingDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <img className="playButton" src={playBtn}/>
          <img className="playBar" src={playBar}/>
        </div>
        <div className="recordingElement">
          <div className="recordingTitle">
            Title
          </div>
          <div className="recordingDate">
            00/00/0000 | 00:00
          </div>
          <div className="recordingDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <img className="playButton" src={playBtn}/>
          <img className="playBar" src={playBar}/>
        </div>
        <div className="recordingElement">
          <div className="recordingTitle">
            Title
          </div>
          <div className="recordingDate">
            00/00/0000 | 00:00
          </div>
          <div className="recordingDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <img className="playButton" src={playBtn}/>
          <img className="playBar" src={playBar}/>
        </div>
      </div>
    </>
  );
};

export default myRecordings;
