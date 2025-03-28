import React, { useState } from "react";
import '../homestyle/calendar.scss'

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const totalDays = 30; // Current month days count
  const currentMonth = "June 2023";

  const appointments = {
    14: { time: "10:00 AM", description: "Team Meeting" },
    22: { time: "02:00 PM", description: "Doctor Appointment" },
  };

  const handleDateClick = (date) => {
    setSelectedDate(selectedDate === date ? null : date);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h1>June Calendar</h1>
      </div>
      <div className="calendar-grid">
        {days.map((day) => (
          <div key={day} className="day-header">
            {day}
          </div>
        ))}
        {/* Empty cells for offset */}
        {[...Array(3)].map((_, i) => (
          <div key={`empty-${i}`} className="empty-cell"></div>
        ))}
        {/* Render days */}
        {Array.from({ length: totalDays }, (_, i) => i + 1).map((date) => (
          <div
            key={date}
            className={`day-cell ${
              appointments[date] ? "has-appointment" : ""
            } ${selectedDate === date ? "selected" : ""}`}
            onClick={() => handleDateClick(date)}
          >
            {date}
          </div>
        ))}
      </div>
      <div className="appointment-info">
        {selectedDate && appointments[selectedDate] ? (
          <div>
            <h2>Appointment on June {selectedDate}</h2>
            <p>{appointments[selectedDate].time}</p>
            <p>{appointments[selectedDate].description}</p>
          </div>
        ) : (
          <p>Select a date to view details</p>
        )}
      </div>
    </div>
  );
};

export default Calendar;
