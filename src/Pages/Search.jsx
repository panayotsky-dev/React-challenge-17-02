import React from 'react'
import Card from '../components/Card/Card'
import Header from '../components/Header/Header'
import recipeData from '../components/recipeData'

import SearchList from '../components/SearchList/SearchList'

function createCard(recipe){
    return  <Card 
    name={recipe.name}
    firstTag={recipe.firstTag} 
     secondTag = {recipe.secondTag}
     image={recipe.image} 
     />
   }
function Search() {
  return (
    <>
    <Header />
    <SearchList items = {recipeData}/> 
    
    {/* {inputFilter.length== 0 ? <>ASDASD</> : ""}    */}
    
    </>
  )
}

export default Search