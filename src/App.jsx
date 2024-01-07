import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from "./components/MyNavbar";
import Meeting from "./components/Meeting";
import HomePage from "./components/Homepage";


const App = () => {
  return (
    <Router>
      <MyNavbar />
      
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/meetings" element={<Meeting />} />
      </Routes>
      
      
    </Router>
  );
}

export default App;
