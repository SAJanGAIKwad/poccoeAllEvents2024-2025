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
 <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="event-card-image">
      <img className="rounded-t-lg" src={event.image} alt="Event" />
    </div>

    <div className="event-card-content">
      <h2 className="event-card__title ">{event.title}</h2>
      <p className="event-card__description">{event.description}</p>
      <p className="event-card__location">Location: {event.location}</p>
      <p >
        <span className="">
          {formatDate(event.date.eventStart)} <span className="text-red-700 font-bold">To </span>
          {formatDate(event.date.eventEnd)}
        </span>
      </p>
    </div>
    <div className="register-block">
      <span className="register-text">
        <a href="www.google.com">Register Here</a>
      </span>
    </div>
 </div>
);

export default EventCard;