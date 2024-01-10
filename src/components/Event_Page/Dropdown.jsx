import React, { useState } from 'react';
import Select from 'react-select';
import '../../pages_css/Event_Page_CSS/Dropdown.css';

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: '8px',
    boxShadow: 'none',
    width:'100%'
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#3498db' : 'white',
    color: state.isFocused ? 'white' : 'black',
    '&:hover': {
      backgroundColor: '#3498db',
      color: 'white',
    },
  }),
};

const options = [
  { value: "all", label: "All Events" },
  { value: "past", label: "Past Events" },
  { value: "upcoming", label: "Upcoming Events" },
  { value: "live", label: "Live Events" }
];



const Dropdown=({onChange})=> {

  const [selectedOption, setSelectedOption] = useState({ value: 'all', label: 'All Events' });


  const handleChange = (selectedOption) => {
    // Call the scrollToSection function with the selected option's value
    setSelectedOption(selectedOption);
    onChange(selectedOption);
  };

  return (
    <div className='drop-down'>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}      
        styles={customStyles}
      />
    </div>
  );
}

export default Dropdown;




