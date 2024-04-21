import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import "../../pages_css/Event_Page_CSS/EventList.css";
import axios from 'axios'; // Import axios

const LiveEvents = () => {
 const [liveEvents, setLiveEvents] = useState([]);

 useEffect(() => {
    const fetchLiveEvents = async () => {
      try {
        const response = await axios.get('/live-events'); // Use axios.get
        setLiveEvents(response.data); // Access data with response.data
        console.log(liveEvents);
      } catch (error) {
        console.error('Error fetching live events:', error);
      }
    };

    fetchLiveEvents();
 }, []);

 return (
    <>
      <h2>Live Events</h2>
      <div className="event-list">
        {liveEvents.map(event => (
          <EventCard key={event._id} event={event} /> 
        ))}
      </div>
    </>
 );
};

export default LiveEvents;
