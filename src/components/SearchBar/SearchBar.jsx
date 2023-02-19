import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Card from '../Card/Card';
// import SearchList from '../SearchList/SearchList'


function SearchBar({items}) {
  
  return (
    <>
    <div className="search" >
    <Link className="input-holder" to='/search'>
    
      {/* {items.filter(item => item.includes({searchField})).map(
    <div className='searched-items'>
      
    <div className="icon"></div>
      <input 
        className="search-input"
        type = "search" 
        placeholder = "Search Recipe" 
        onChange = {handleChange}
         />
      </div>    
  )} */}
    <div className="icon"></div>
      <input 
        className="search-input"
        type = "search" 
        placeholder = "Search Recipe" 
        
         />           
          
    </Link>
    </div>
    </>
  )
}

export default SearchBar
