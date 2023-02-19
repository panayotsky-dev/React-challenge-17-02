
import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card/Card'
import Header from '../components/Header/Header'
import recipeData, { italianFood, seaFood } from '../components/recipeData'
import SearchBar from '../components/SearchBar/SearchBar'




function createCard(recipe){
  return  <Card 
  key={recipe.id}
  name={recipe.name}
  firstTag={recipe.firstTag} 
   secondTag = {recipe.secondTag}
   image={recipe.image}
   ingredients={recipe.ingredients}
   instructions={recipe.instructions}
   foodType={recipe.foodType}

   />
 }

function HomePage() {
  return (
    <>
    <div className="wrapper">
    <Header className="header" />
    <SearchBar items={recipeData} />
    <div className="recipes-container">
    <motion.h1 >🌊Down for Sea food tonight?</motion.h1>
    {/* {recipeData.map(createCard)} */}
    <div className="map-container"> 
    {seaFood.map(createCard)}
    </div>

    <motion.h1 >🍝Down for Italian food tonight?</motion.h1>
    <div className="map-container"> 
    {italianFood.map(createCard)}
    </div>
    </div>

    </div>
    </>
  )
}

export default HomePage