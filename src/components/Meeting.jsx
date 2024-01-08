import React, { useRef, useState } from 'react';
import { Row, Col, Button, Card, Form } from 'react-bootstrap';
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaVolumeUp,
  FaComment,
  FaCrop,
  FaEyeSlash,
} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote, faFileAlt, faComments, faCode, faChartBar } from '@fortawesome/free-solid-svg-icons';
import './css/Meeting.css';
import Snippets from './Snippets';


const Meeting = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showNotes, setShowNotes] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    isPlaying ? video.pause() : video.play();
    setIsPlaying(!isPlaying);
  };

  const handleForward = () => {
    const video = videoRef.current;
    video.currentTime += 10; // Move forward by 10 seconds, adjust as needed
  };

  const handleBackward = () => {
    const video = videoRef.current;
    video.currentTime -= 10; // Move backward by 10 seconds, adjust as needed
  };

  const handleHideVideo = () => {
    // Add logic to hide the video
  };

  const MyButtons = () => {
    return (
      <div className="button-container">
        <button onClick={() => handleButtonClick('notes')}>
          <FontAwesomeIcon icon={faStickyNote} />
          <span>Notes</span>
        </button>
        <button onClick={() => handleButtonClick('transcript')}>
          <FontAwesomeIcon icon={faFileAlt} />
          <span>Transcript</span>
        </button>
        <button onClick={() => handleButtonClick('comments')}>
          <FontAwesomeIcon icon={faComments} />
          <span>Comments</span>
        </button>
        <button onClick={() => handleButtonClick('snippets')}>
          <FontAwesomeIcon icon={faCode} />
          <span>Snippets</span>
        </button>
        <button onClick={() => handleButtonClick('scorecards')}>
          <FontAwesomeIcon icon={faChartBar} />
          <span>Scorecards</span>
        </button>
      </div>
    );
  };

  const handleButtonClick = (option) => {
    setSelectedOption(option);
    if (option === 'notes') {
      setShowNotes(true);
    } else {
      setShowNotes(false);
    }
  };

  const Editor = () => {
    if (selectedOption === 'notes') {
      return <div className="notes-content">{showNotes && <Snippets />}</div>;
    }
    return null;
  };

  const handleEditorButtonClick = (editorOption) => {
    // Handle editor button click logic
    console.log(`Editor button clicked: ${editorOption}`);
  };

  return (
    <div className="container-fluid mt-0">
      <Row className="meeting-container">
        <Col md={8} className="video-col">
          <div className="meeting-video video">
            <video ref={videoRef} controls width="100%" height="100%">
              <source
                src="https://youtu.be/r4ZEvFkigQ0?si=B8YZhH_ptVdRZtsB"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="video-controls mt-4 d-flex align-items-center">
            <div className="icon-container">
              <FaBackward className="bckwdicon icon" onClick={handleBackward} />
            </div>
            <div className="icon-container">
              {isPlaying ? (
                <FaPause className="playicon icon" onClick={handlePlayPause} />
              ) : (
                <FaPlay className="pauseicon icon" onClick={handlePlayPause} />
              )}
            </div>
            <div className="icon-container">
              <FaForward className="frwdicon icon" onClick={handleForward} />
            </div>
            <div className="icon-container">
              <FaVolumeUp className="speakericon icon" />
            </div>
            <div className="icon-container">
              <FaComment className="commenticon icon" />
            </div>
            <div className="icon-container">
              <FaCrop className="cropicon icon" />
            </div>
            <div className="icon-container">
              <FaEyeSlash className="hidevideoicon icon" onClick={handleHideVideo} />
            </div>
          </div>
        </Col>
        <Col md={4} className="options-col">
          <div className="other-options p-4">
            <MyButtons />
            <Editor />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Meeting;
