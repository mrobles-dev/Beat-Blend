// import React from 'react'
// import './record.css'

// export default Record

import React, { useState, useEffect } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import "./record.css";


export default function App() {
  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
     
    },
    (err) => console.table(err)
  );
  const [audioElements, setAudioElements] = useState([]);

  useEffect(() => {
    recorderControls.stopRecording();
  }, []);

  const addAudioElement = (beepbop) => {
    const url = URL.createObjectURL(beepbop);
    const audio = new Audio(url);
    setAudioElements([...audioElements, audio]);
  };

  const handlePlayback = () => {
    audioElements.forEach((audio) => {
      audio.play();
      audio.addEventListener("timeupdate", handleTimeUpdate);
    });
  };

  const handleTimeUpdate = (event) => {
    const audioElement = event.target;
    const audioIndex = audioElements.findIndex(
      (audio) => audio === audioElement
    );
    const formattedTime = formatTime(audioElement.currentTime);
    console.log(`Audio ${audioIndex + 1} - Current Time: ${formattedTime}`);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleDelete = (index) => {
    const updatedAudioElements = [...audioElements];
    const audio = updatedAudioElements[index];
    audio.pause();
    audio.removeEventListener("timeupdate", handleTimeUpdate);
    updatedAudioElements.splice(index, 1);
    setAudioElements(updatedAudioElements);
  };

  const handleStop = (index) => {
    const audio = audioElements[index];
    audio.pause();
    audio.currentTime = 0;
  };

  const handleDownload = (index) => {
    const audio = audioElements[index];
    const link = document.createElement("a");
    link.href = audio.src;
    link.download = `track_${index + 1}.mp3`;
    link.click();
  };

  const Record = () => {
    return (
      <>
        <div className="recordHeader">Record</div>
        <div className="mainRecordContainer"></div>
      </>
    );
  };

  return (
    <div className="centered">
      <div className="rec">
        <Record /> {/* Render the Record component */}
        <AudioRecorder
          classes={{
            AudioRecorderClass: "mic",
          }}
          onRecordingComplete={(beepbop) => addAudioElement(beepbop)}
          recorderControls={recorderControls}
          showVisualizer={true}
        />
        <br />
        <button className="stopRecord" onClick={recorderControls.stopRecording}>
          Stop recording
        </button>
        <br />
        <button className="playAll" onClick={handlePlayback}>
          Play All
        </button>
        <div>
          {audioElements.map((audio, index) => (
            <div key={index}>
              <audio src={audio.src} controls />
              <button className="stop" onClick={() => handleStop(index)}>
                Stop
              </button>
              <button className="delete" onClick={() => handleDelete(index)}>
                Delete
              </button>
              <button
                className="download"
                onClick={() => handleDownload(index)}
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
