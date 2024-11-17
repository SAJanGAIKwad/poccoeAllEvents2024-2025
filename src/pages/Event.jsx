import React, {useRef,useState,useEffect} from 'react';
import Header from '../components/Event_Page/Header';
import AllEvents from '../components/Event_Page/AllEvents';
import PastEvents from '../components/Event_Page/PastEvents';
import UpcomingEvents from '../components/Event_Page/UpcomingEvents';
import LiveEvents from '../components/Event_Page/LiveEvents';

import axios from 'axios'


const Event = () => {
 
  
  const allEventsRef = useRef(null);
  const pastEventsRef = useRef(null);
  const upcomingEventsRef = useRef(null);
  const liveEventsRef = useRef(null);
  const [eventsData, setEventsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Step 1: Add Search State

  // Function to get the appropriate ref based on the selected option
  const scrollToSection = (section) => {
    let targetRef = null;
    let headerHeight = 0;

    // Calculate the header height
    const header = document.querySelector('.header-container');
    if (header) {
      headerHeight = header.getBoundingClientRect().height;
    }

    switch (section) {
      case "all":
        targetRef = allEventsRef;
        break;
      case "past":
        targetRef = pastEventsRef;
        break;
      case "upcoming":
        targetRef = upcomingEventsRef;
        break;
      case "live":
        targetRef = liveEventsRef;
        break;
      default:
        break;
    }

    if (targetRef && targetRef.current) {
      // Calculate the target scroll position
      const targetPosition = targetRef.current.offsetTop - headerHeight - 100;

      // Scroll to the target position
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  

  // Function to handle search input changes (Step 2)
  const handleSearchInputChange = (value) => {
    setSearchQuery(value);
  };

//fetch the data from api to display on event cards.
axios.defaults.baseURL = 'http://localhost:3001/api/events';
  useEffect(() => {
    axios.get('/all-events')
      .then((response) => {
        setEventsData(response.data); // Assuming the data is in response.data
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []); 



  return (
    <div className="app bg-gray-100 pt-16">
      <Header
        scrollToSection={scrollToSection}
        // Passing the search query and handler to the Header component
        searchQuery={searchQuery}
        onSearchInputChange={handleSearchInputChange}
      />
      <div className="body-container">
        <div ref={allEventsRef}>
          <AllEvents 
            events={eventsData.filter((event) =>
              event.title.toLowerCase().includes(searchQuery.toLowerCase())
            )}
          />
        </div>
        <div ref={pastEventsRef}>
          <PastEvents  />
        </div>
        <div ref={upcomingEventsRef}>
          <UpcomingEvents  />
        </div>
        <div ref={liveEventsRef}>
          <LiveEvents />
        </div>
      </div>
    </div>
  );
};

export default Event;