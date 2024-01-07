import React, { useRef, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaPlay, FaPause, FaForward } from 'react-icons/fa';
import './css/Meeting.css';

const Meeting = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    isPlaying ? video.pause() : video.play();
    setIsPlaying(!isPlaying);
  };

  const handleForward = () => {
    const video = videoRef.current;
    video.currentTime += 10; // Move forward by 10 seconds, adjust as needed
  };

  return (
    <div className="container-fluid mt-4">
      <Row>
        <Col md={6}>
          <div className="meeting-video video">
            <video ref={videoRef} controls width="100%" height="100%">
              <source src="https://youtu.be/r4ZEvFkigQ0?si=B8YZhH_ptVdRZtsB" type="video/mp4" />
            </video>
          </div>
          <div className=" video-controls ">
            {isPlaying ? (
              <div><FaPause className="playicon" onClick={handlePlayPause} /></div>
              
            ) : (
              <FaPlay className="pauseicon" onClick={handlePlayPause} />
            )}
            <FaForward className="frwdicon" onClick={handleForward} />
            {/* Add more controls as needed */}
          </div>
        </Col>
        <Col md={2}>
          <div className="other-options">
           
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Meeting;
