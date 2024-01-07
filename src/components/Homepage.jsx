// Homepage.jsx
import React from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './css/Homepage.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Meeting 1',
    
    start: new Date(2024, 0, 4, 10, 0),
    end: new Date(2024, 0, 4, 12, 0),
  },
  
  // Add more events as needed
];

const referenceDetails = [
  
  { category: 'Tasks', content: null }, // You can add task details here
  { category: 'Holidays in India', content: 'Lohri' }, // You can add holiday details here
];

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const timeSlots = Array.from({ length: 24 }, (_, i) => i);

const Homepage = () => {
  return (
    <div className="google-calendar-container">
      <div className="google-calendar-sidebar">
        {referenceDetails.map((item, index) => (
          <div key={index}>
            <h3>{item.category}</h3>
            {item.content && <p>{item.content}</p>}
          </div>
        ))}
        <div className="days-and-hours">
          <div className="days-of-week">
            {daysOfWeek.map((day, index) => (
              <div key={index}>{day}</div>
            ))}
          </div>
          <div className="time-slots">
            {timeSlots.map((hour) => (
              <div key={hour}>
                {hour} {hour < 12 ? 'AM' : 'PM'}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="google-calendar">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default Homepage;
