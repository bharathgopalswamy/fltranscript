import React, { useState } from 'react';
import './css/Transcriptor.css'; 

const Transcriptor = () => {
  const [searchQuery, setSearchQuery] = useState('');
 
  const context = "Meeting context or description goes here.";
  const participants = ["Participant 1", "Participant 2", "Participant 3"];
  const spokenContent = [
    { participant: "Participant 1", content: "Hello everyone!" },
    { participant: "Participant 2", content: "Hi there!" },
    
  ];

  const filteredContent = spokenContent.filter((item) =>
    item.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="transcriptor-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="transcriptor-content">
        <div className="bordered-area">
          <div className="context">{context}</div>
          <div className="participants">
            <strong>Participants:</strong> {participants.join(', ')}
          </div>
          <div className="spoken-content">
            {filteredContent.map((item, index) => (
              <div key={index} className="speech-bubble">
                <strong>{item.participant}:</strong> {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transcriptor;
