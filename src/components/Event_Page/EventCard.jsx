import React from "react";
import "../../pages_css/Event_Page_CSS/EventCard.css";
import Imag from "../../../src/Images/event-image.jpg";

const EventCard = ({ event }) => (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
);

export default EventCard;
