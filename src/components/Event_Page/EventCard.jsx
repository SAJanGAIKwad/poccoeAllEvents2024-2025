import React from "react";
import "../../pages_css/Event_Page_CSS/EventCard.css";
// Helper function to format dates
function formatDate(dateString) {
 const date = new Date(dateString);
 const day = date.getDate().toString().padStart(2, '0');
 const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based in JavaScript
 const year = date.getFullYear();
 const hours = date.getHours();
 const minutes = date.getMinutes();
 const ampm = hours >= 12 ? 'pm' : 'am';
 const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
 return `${day}/${month}/${year} ${formattedTime}`;
}

const EventCard = ({ event }) => (
  <div className="p-[5px] ">
    <div className="sm:max-w-[390px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="event-card-image">
        <img className="rounded-t-lg" src={Imag} alt="Event" />
      </div>

      <div className="event-card-content">
        {/* <h3>Start Time: </h3><p>{event.startTime}</p>
        <h3>End Time:</h3><p> {event.endTime}</p> */}

        <h2 className="event-card__title ">{event.name}</h2>
        <p className="event-card__description">{event.description}</p>
        <p className="event-card__location">Location: {event.location}</p>
        <p className="event-card__datetime">
          Date & Time: {event.date}{" "}
          <span className="time">{event.startTime}</span>
        </p>
      </div>
      <div className="register-block">
        <span class="register-text">
          <a href="www.google.com">Register Here</a>
        </span>
      </div>
    </div>
 </div>
);

export default EventCard;
