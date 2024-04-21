import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import "../../pages_css/Event_Page_CSS/EventList.css";
import axios from 'axios'; // Import axios here

const PastEvents = () => {
 const [pastEvents, setPastEvents] = useState([]);

 useEffect(() => {
    const fetchPastEvents = async () => {
      try {
        const response = await axios.get('/past-events');
        setPastEvents(response.data);
      } catch (error) {
        console.error('Error fetching past events:', error);
      }
    };

    fetchPastEvents();
 }, []);

 return (
    <>
      <h2>Past Events</h2>
      <div className="event-list">
        {pastEvents.map(event => (
          <EventCard key={event._id} event={event} /> // Assuming event._id is the unique identifier
        ))}
      </div>
    </>
 );
};

export default PastEvents;
