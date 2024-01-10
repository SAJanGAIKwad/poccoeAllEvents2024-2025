import React ,{useState,useEffect} from 'react';
import '../../pages_css/Event_Page_CSS/Header.css';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';


const Header = ({ scrollToSection , searchQuery , onSearchInputChange}) => {
  const handleDropdownChange = selectedOption => {
    scrollToSection(selectedOption.value);
  };


  const [isScrolled,setIsScrolled]=useState(false);

  useEffect(()=>{
    const scrollHandler=()=>{
      window.scrollY>80?setIsScrolled(true):setIsScrolled(false);
    };

    window.addEventListener('scroll',scrollHandler);

    return()=>{
      window.removeEventListener('scroll', scrollHandler);
    };
  },[]);

  return (
    <div className={`header-container ${isScrolled?'scrolled':''}`}>
    {/* // <div className="header-container "> */}
      <div className="header">
        <Dropdown onChange={handleDropdownChange} />
        <SearchBar 
           searchQuery={searchQuery}
           onSearchInputChange={onSearchInputChange}
        />
      </div>
    </div>
  );
};

export default Header;
