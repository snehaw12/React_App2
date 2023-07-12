import React, { useState } from 'react';

const NewTicketPage = () => {
  const [leadSource, setLeadSource] = useState('');
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [breakdownIssue, setBreakdownIssue] = useState('');
  const [location, setLocation] = useState('');
  const [serviceFee, setServiceFee] = useState('');
  const [assistanceTime, setAssistanceTime] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    // Display "New Task Created Successfully" popup
    alert('New Task Created Successfully');
  };

  return (
    <div>
      <h2>Create New Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="leadSource">Lead Source</label>
          <select
            id="leadSource"
            value={leadSource}
            onChange={(e) => setLeadSource(e.target.value)}
            required
          >
            <option value="">Select Lead Source</option>
            <option value="Web">Web</option>
            <option value="Chat">Chat</option>
            <option value="Call">Call</option>
          </select>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="vehicleMake">Vehicle Make</label>
          <input
            type="text"
            id="vehicleMake"
            value={vehicleMake}
            onChange={(e) => setVehicleMake(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="registrationNumber">Vehicle Registration Number</label>
          <input
            type="text"
            id="registrationNumber"
            value={registrationNumber}
            onChange={(e) =>
              setRegistrationNumber(e.target.value.toUpperCase().replace(/\s/g, ''))
            }
            required
          />
        </div>
        <div>
          <label htmlFor="breakdownIssue">Breakdown Issue</label>
          <textarea
            id="breakdownIssue"
            value={breakdownIssue}
            onChange={(e) => setBreakdownIssue(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="serviceFee">Service Fee</label>
          <input
            type="text"
            id="serviceFee"
            value={serviceFee}
            onChange={(e) => setServiceFee(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="assistanceTime">Assistance Time</label>
          <input
            type="text"
            id="assistanceTime"
            value={assistanceTime}
            onChange={(e) => setAssistanceTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="comments">Comments</label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewTicketPage;
