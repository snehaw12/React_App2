import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Login';
import LandingPage from './LandingPage';
import NewTicketPage from './NewTicketPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/new-ticket" element={<NewTicketPage />} />
      </Routes>
    </Router>
  );
};

export default App;
