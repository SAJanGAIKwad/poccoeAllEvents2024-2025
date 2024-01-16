import React, { useState } from 'react';
import axios from 'axios';

import './event-form.css'


const EventForm = () => {
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      date:{
        eventStart: '',
        eventEnd: ''
      },
      location: ''
    
    });

    const [isSelected, setIsSelected] = useState(false);
   
    const handleChange = (event) => {
      const { id, value } = event.target;
      setFormData((prevFormData) =>{
        if(id==='eventStart') return {...prevFormData, date:{...prevFormData.date, eventStart: value}};
        else if(id==='eventEnd') return {...prevFormData, date:{...prevFormData.date, eventEnd: value}};
        else return {...prevFormData, [id]: value};
      });

      if(value!=='') setIsSelected(true);
      else setIsSelected(false);

    };
   
    const handleSubmit = async(event) => {
      event.preventDefault();   //prevent to submit the form traditional way

      // Handle form submission logic here
      console.log(formData);
      // console.log(JSON.stringify(formData))
      
        // const data={
        //     "title": "lE",
        //     "description": "This is a sample event for testing purposes.",
        //     "category": "Technlogy",
        //     "date": {
        //         "eventStart": "2024-01-15T09:00:00Z",
        //         "eventEnd": "2024-01-15T17:00:00Z"
        //     },
        //     "location": "Sample Location",
        //     "image": "https://example.com/sample-image.jpg"
        // }
       
        try {
        
          const response = await axios.post('http://localhost:3001/api/events',formData);
    
      
          console.log(response.data); 
    
        } catch (error) {
          console.error("Error submitting event:", error);
          
        }
        
       
     };

   
    return (
        <div className="form-container">
            <form id='event-form' onSubmit={handleSubmit}>

                <div className="event-title">
                     <h1>Event Details</h1>
                </div>

                <div className="event-title-des-location">
                    <input type="text" id="title"  placeholder='Event Title' value={formData.title} onChange={handleChange} />

                    <textarea id="description"  placeholder='Event Description' value={formData.description} onChange={handleChange} />

                    <input type="text" id="location"  placeholder='Event Location' value={formData.location} onChange={handleChange} />
                </div>
                <div className="date">
                    <div className="start-date">
                        <label htmlFor="eventStart">Start Date and Time:</label>
                        <input
                         type="datetime-local"
                         id="eventStart"
                         className={isSelected ? 'black': 'gray'}
                         value={formData.date.eventStart}
                         onChange={handleChange}
                        />
                    </div>

                    <div className="end-date">
                        <label htmlFor="eventEnd">End Date and Time:</label>
                        <input
                         type="datetime-local"
                         id="eventEnd"
                         className={isSelected ? 'black': 'gray'}
                         value={formData.date.eventEnd}
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
   