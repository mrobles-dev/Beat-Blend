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

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
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
    <div>
      <Record /> {/* Render the Record component */}
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
        showVisualizer={true}
      />
      <br />
      <button onClick={recorderControls.stopRecording}>Stop recording</button>
      <br />
      <button onClick={handlePlayback}>Play All</button>
      <div>
        {audioElements.map((audio, index) => (
          <div key={index}>
            <audio src={audio.src} controls />
            <button onClick={() => handleStop(index)}>Stop</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleDownload(index)}>Download</button>
          </div>
        ))}
      </div>
    </div>
  );
}
