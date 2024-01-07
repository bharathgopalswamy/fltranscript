import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCalendarAlt, faCloudUploadAlt, faVideo, faBars, faSearch, faHome } from '@fortawesome/free-solid-svg-icons';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Navbar.css';


const MyNavbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar className='bgnav'>
        <div className="container-fluid">
          <Navbar.Brand  onClick={toggleSidebar}>
            {isSidebarOpen ? 'EasyTransPro' : <FontAwesomeIcon icon={faBars} className='hamburg' />}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto">
            <Nav.Link href="#" className='navlinks'>
                <FontAwesomeIcon icon={faHome} /> Home
              </Nav.Link>
            
              <Nav.Link href="#" className='navlinks'>
                <FontAwesomeIcon icon={faBell} /> Alerts
              </Nav.Link>
              <Nav.Link href="#" className='navlinks'>
                <FontAwesomeIcon icon={faCalendarAlt} /> View Scheduling
              </Nav.Link>
              <Nav.Link href="#" className='navlinks'>
                <FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Meeting
              </Nav.Link>
              <Nav.Link href="#" className='navlinks'>
                <FontAwesomeIcon icon={faVideo} /> Impromptu
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn" type="submit">
      <FontAwesomeIcon className='btn-search' icon={faSearch} style={{ color: 'white' }} />
    </button>
              </form>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default MyNavbar;
