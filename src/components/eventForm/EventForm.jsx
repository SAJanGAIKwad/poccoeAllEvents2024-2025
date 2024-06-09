import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import './event-form.css'


const EventForm = () => {

    const [eventDetails, setEventDetails] = useState({
      title: '',
      description: '',
      location: '',
      date:{
        eventStart: new Date(),
        eventEnd: new Date()
      },
      category:'technical'
    });

    const [isSelected, setIsSelected] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();

    const handleFileChange=(event)=>{
      setSelectedFile(event.target.files[0]);
      // console.log(event.target.files)
    }

    const handleChange = (id,value) => {

      setEventDetails((prevEventDetails) => {
        if (id === 'eventStart' || id === 'eventEnd') {
          return {
            ...prevEventDetails,
            date: {
              ...prevEventDetails.date,
              [id]: value,
            },
          };
        } else {
          return {
            ...prevEventDetails,
            [id]: value,
          };
        }
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
       
      try {
      
        const response = await axios.post('http://localhost:3001/api/events',formDataToSend,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        toast.success("Event created Successfully",{autoClose:3000});
        setTimeout(() => {
          navigate('/event');
        },3000);

  
      } catch (error) {
        console.error("Error submitting event:", error);
        
      }
        
       
     };

   
    return (

        <div className="form-container">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <form id='event-form' onSubmit={handleSubmit}>

                <div className="event-title">
                     <h1>Event Details</h1>
                </div>

                <div className="event-title-des-location">
                    <input type="text" id="title"  placeholder='Event Title' value={eventDetails.title} onChange={(e)=>{handleChange('title', e.target.value)}} />

                    <textarea id="description"  placeholder='Event Description' value={eventDetails.description} onChange={(e)=>{handleChange('description', e.target.value)}} />

                    <input type="text" id="location"  placeholder='Event Location' value={eventDetails.location} onChange={(e)=>{handleChange('location', e.target.value)}} />
                </div>
                  <div className="img-catag-date">
                    <div className="image-category">
                      <div className="file-upload">
                        <label htmlFor="file">Upload Image:</label>
                        <input type="file" id='file' onChange={handleFileChange} />
                      </div>
                      <div className="category">
                        <label htmlFor="category">Category:</label>
                        <select name="category" id="category" value={eventDetails.category} onChange={(e)=>{handleChange('category', e.target.value)}}>
                          <option value="technical">Technical</option>
                          <option value="cultural">Cultural</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="date">
                        <div className="start-date">
                            <label htmlFor="eventStart">Start Date and Time:</label>
                            <DatePicker
                              id="eventStart"
                              selected={eventDetails.date.eventStart}
                              onChange={(date) => handleChange('eventStart', date)}
                              showTimeSelect
                              dateFormat="Pp"
                              className={isSelected ? 'black' : 'gray'}
                            />
                        </div>

                        <div className="end-date">
                            <label htmlFor="eventEnd">End Date and Time:</label>
                            <DatePicker
                              id="eventEnd"
                              selected={eventDetails.date.eventEnd}
                              onChange={(date) => handleChange('eventEnd', date)}
                              showTimeSelect
                              dateFormat="Pp"
                              className={isSelected ? 'black' : 'gray'}
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
   