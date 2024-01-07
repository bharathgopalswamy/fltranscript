import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from "./components/MyNavbar";
import Meeting from "./components/Meeting";

const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/meetings" element={<Meeting />} />
      </Routes>
      
      
    </Router>
  );
}

export default App;
