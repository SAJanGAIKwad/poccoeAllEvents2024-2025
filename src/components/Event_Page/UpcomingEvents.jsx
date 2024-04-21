import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import "../../pages_css/Event_Page_CSS/EventList.css";
import axios from 'axios'

const UpcomingEvents = () => {
 const [upcomingEvents, setUpcomingEvents] = useState([]);

 useEffect(() => {
    const fetchUpcomingEvents = async () => {
      try {
        const response = await axios.get('/upcoming-events'); // Adjust the URL as necessary
        setUpcomingEvents(response.data);
      } catch (error) {
        console.error('Error fetching Upcoming events:', error);
      }
    };

    fetchUpcomingEvents();
 }, []);

 return (
    <>
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {upcomingEvents.map(event => (
          <EventCard key={event._id} event={event} /> // Assuming event._id is the unique identifier
        ))}
      </div>
    </>
 );
};

export default UpcomingEvents;
