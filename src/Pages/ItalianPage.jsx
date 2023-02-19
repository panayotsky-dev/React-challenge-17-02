import React from 'react'
import Card from '../components/Card/Card'
import Header from '../components/Header/Header'
import recipeData, { italianFood, seaFood } from '../components/recipeData'
import SearchBar from '../components/SearchBar/SearchBar'


function createCard(recipe){
    return  <Card 
    name={recipe.name}
    firstTag={recipe.firstTag} 
     secondTag = {recipe.secondTag}
     image={recipe.image} 
     />
   }

function ItalianPage() {
  return (
    <>
    <Header />
    <SearchBar items={italianFood} />  
    
    {italianFood.map(createCard)}
    </>
  )
}

export default ItalianPage