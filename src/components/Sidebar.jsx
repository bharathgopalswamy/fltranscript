import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import './css/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMusic, faClock, faUser, faComment, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen, onClose }) => {
  const handleLinkClick = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <div className={`offcanvas offcanvas-start${isOpen ? ' show' : ''}`} tabIndex="-1" id="sidebar" aria-labelledby="sidebarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="sidebarLabel">EasyTransPro</h5>
        
      </div>
      <div className="offcanvas-body">
        <div className="nav flex-column">
          <Link to="/meetings" className="nav-link text-decoration-none sidelink" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faCalendar} className='icons'/> Meetings
          </Link>
          <Link to="#playlist" className="nav-link text-decoration-none sidelink" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faMusic} className='icons' /> Playlists
          </Link>
          <Link to="#scheduler" className="nav-link text-decoration-none sidelink" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faClock} className='icons' /> Scheduler
          </Link>
          <Link to="#coaching" className="nav-link text-decoration-none sidelink" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faUser} className='icons' /> Coaching
          </Link>
          <Link to="#conversational-insights" className="nav-link text-decoration-none sidelink" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faComment} className='icons' /> Conversational Insights
          </Link>
        </div>
      
        <div className='bottom-nav mt-auto nav flex-column'>
          <Link to="#quick-start" className="nav-link text-decoration-none sidelink" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faCogs} className='icons'/>Quick Start
          </Link>
          <Link to="#settings" className="nav-link text-decoration-none sidelink" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faCogs} className='icons' />Settings
          </Link>
          <Link to="#logout" className="nav-link text-decoration-none sidelink" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faSignOutAlt} className='icons' /> Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
