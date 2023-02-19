import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Card from '../Card/Card';
// import SearchList from '../SearchList/SearchList'
function createCard(recipe) {
  return <Card
    key={recipe.id}
    name={recipe.name}
    firstTag={recipe.firstTag}
    secondTag={recipe.secondTag}
    image={recipe.image}
    ingredients={recipe.ingredients}
    instructions={recipe.instructions}
    foodType={recipe.foodType}

  />
}

function SearchList({ items }) {
  const [searchField, setSearchField] = useState("");
  console.log(items)

  const handleChange = e => {
    setSearchField(e.target.value);
    let input = e.target.value;
    console.log(e.target.value)
    // console.log(searchField, input)
  };

  let inputFilter = items.filter(item => item.name.toLowerCase().includes(searchField))
  let ddd = document.querySelector("input").value
  console.log(inputFilter)

  return (
    <>

      <div className="wrapper">

        <div className="search" >
          <div className="input-holder" >
            <div className="icon"></div>
            <input
              className="search-input"
              type="search"
              placeholder="Search Recipe"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="recipes-container">
          {ddd.length > 0 && inputFilter.length > 0 ? <div className=''><h1>HERE IS WHAT WE FOUND:</h1></div> : "" }
          <div className="map-container">
            {inputFilter.length > 0 ? inputFilter.map(createCard) :
              <div className='nothing'>
                No results found for "{ddd}". <span>How about some MEAT?</span>
                <div className='burger-button'>Yeah, sure.</div>
              </div>}
          </div>
        </div>


      </div>
    </>
  )
}

export default SearchList
