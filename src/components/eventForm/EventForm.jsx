import React, { useState } from 'react';
import axios from 'axios';

import './event-form.css'

import { useEffect } from 'react';

const EventForm = () => {
    const [formData, setFormData] = useState({
      eventTitle: '',
      eventDate:{
        startDate: '',
        endDate: ''
      },
      eventLocation: '',
      eventDescription: ''
    });

    const [isSelected, setIsSelected] = useState(false);
   
    const handleChange = (event) => {
      const { id, value } = event.target;
      setFormData((prevFormData) =>{
        if(id==='startDate') return {...prevFormData, eventDate:{...prevFormData.eventDate, startDate: value}};
        else if(id==='endDate') return {...prevFormData, eventDate:{...prevFormData.eventDate, endDate: value}};
        else return {...prevFormData, [id]: value};
      });

      if(value!=='') setIsSelected(true);
      else setIsSelected(false);

    };
   
    const handleSubmit = async(event) => {
      event.preventDefault();   //prevent to submit the form traditional way

      // Handle form submission logic here
      console.log(formData);
      console.log(JSON.stringify(formData))
      
        const data={
            "title": "SamplE",
            "description": "This is a sample event for testing purposes.",
            "category": "Technlogy",
            "date": {
                "eventStart": "2024-01-15T09:00:00Z",
                "eventEnd": "2024-01-15T17:00:00Z"
            },
            "location": "Sample Location",
            "image": "https://example.com/sample-image.jpg"
        }
       
        try {
        
          const response = await axios.post('http://localhost:3001/api/events', data);
    
      
          console.log(response.data); 
    
        } catch (error) {
          console.error("Error submitting event:", error);
          
        }
        
       
     };

    //  useEffect(() => {
    //   axios.get('https://localhost:3001/api/events')
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }, []);
   
    return (
        <div className="form-container">
            <form id='event-form' onSubmit={handleSubmit}>

                <div className="event-title">
                     <h1>Event Details</h1>
                </div>

                <div className="event-title-des-location">
                    <input type="text" id="eventTitle"  placeholder='Event Title' value={formData.eventTitle} onChange={handleChange} />

                    <textarea id="eventDescription"  placeholder='Event Description' value={formData.eventDescription} onChange={handleChange} />

                    <input type="text" id="eventLocation"  placeholder='Event Location' value={formData.eventLocation} onChange={handleChange} />
                </div>
                <div className="date">
                    <div className="start-date">
                        <label htmlFor="startDate">Start Date and Time:</label>
                        <input
                         type="datetime-local"
                         id="startDate"
                         className={isSelected ? 'black': 'gray'}
                         value={formData.eventDate.startDate}
                         onChange={handleChange}
                        />
                    </div>

                    <div className="end-date">
                        <label htmlFor="endDate">End Date and Time:</label>
                        <input
                         type="datetime-local"
                         id="endDate"
                         className={isSelected ? 'black': 'gray'}
                         value={formData.eventDate.endDate}
                         onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="line"></div>

                <div className="submit-button">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        

    );
   };
   
   export default EventForm;
   