import React, { useState } from 'react';
import axios from 'axios';

import './event-form.css'


const EventForm = () => {

    const [eventDetails, setEventDetails] = useState({
      title: '',
      description: '',
      location: '',
      date:{
        eventStart: '',
        eventEnd: ''
      },
      category:'technical'
    });

    const [isSelected, setIsSelected] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange=(event)=>{
      setSelectedFile(event.target.files[0]);
      // console.log(event.target.files)
    }

    const handleChange = (event) => {

      const { id, value } = event.target;
      setEventDetails((prevEventDetails) =>{
        if(id==='eventStart') return {...prevEventDetails, date:{...prevEventDetails.date, eventStart: value}};
        else if(id==='eventEnd') return {...prevEventDetails, date:{...prevEventDetails.date, eventEnd: value}};
        else return {...prevEventDetails, [id]: value};
      });

      if(value!=='') setIsSelected(true);
      else setIsSelected(false);

    };
   
    const handleSubmit = async(event) => {
      event.preventDefault();   //prevent to submit the form traditional way

      const formDataToSend = new FormData();

      Object.entries(eventDetails).forEach(([key, value]) => {
       if (key === 'date') {
         Object.entries(value).forEach(([subKey, subValue]) => {
           formDataToSend.append(`${key}[${subKey}]`, subValue);
         });
       } else {
         formDataToSend.append(key, value);
       }
      });

      formDataToSend.append('image', selectedFile);

      // console.log("form data to send is ",formDataToSend);
      // for (let pair of formDataToSend.entries()) {
      //   console.log(pair[0] + ' - ' + pair[1]);
      // }
       
      try {
      
        const response = await axios.post('http://localhost:3001/api/events',formDataToSend,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
  
    
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
                    <input type="text" id="title"  placeholder='Event Title' value={eventDetails.title} onChange={handleChange} />

                    <textarea id="description"  placeholder='Event Description' value={eventDetails.description} onChange={handleChange} />

                    <input type="text" id="location"  placeholder='Event Location' value={eventDetails.location} onChange={handleChange} />
                </div>
                  <div className="img-catag-date">
                    <div className="image-category">
                      <div className="file-upload">
                        <label htmlFor="file">Upload Image:</label>
                        <input type="file" id='file' value='' onChange={handleFileChange} />
                      </div>
                      <div className="category">
                        <label htmlFor="category">Category:</label>
                        <select name="category" id="category" value={eventDetails.category} onChange={handleChange}>
                          <option value="technical">Technical</option>
                          <option value="cultural">Cultural</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="date">
                        <div className="start-date">
                            <label htmlFor="eventStart">Start Date and Time:</label>
                            <input
                             type="datetime-local"
                             id="eventStart"
                             className={isSelected ? 'black': 'gray'}
                             value={eventDetails.date.eventStart}
                             onChange={handleChange}
                            />
                        </div>

                        <div className="end-date">
                            <label htmlFor="eventEnd">End Date and Time:</label>
                            <input
                             type="datetime-local"
                             id="eventEnd"
                             className={isSelected ? 'black': 'gray'}
                             value={eventDetails.date.eventEnd}
                             onChange={handleChange}
                            />
                        </div>
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
   