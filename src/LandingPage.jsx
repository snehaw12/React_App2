import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const LandingPage = ({ username }) => {
    const navigate = useNavigate();
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let timeOfDay;

  if (currentHour < 12) {
    timeOfDay = 'Morning';
  } else if (currentHour < 18) {
    timeOfDay = 'Afternoon';
  } else {
    timeOfDay = 'Evening';
  }

  const handleCreateTicket = () => {
    navigate('/new-ticket');
  };

  return (
    <div>
      <h2>Good {timeOfDay}, Rescuer!</h2>
      <p>How are you doing today, {username}?</p>
      <nav>
        <ul>
          <li>
            <button onClick={handleCreateTicket}>Create New Ticket</button>
          </li>
          {/* Add more navigation items if needed */}
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;
