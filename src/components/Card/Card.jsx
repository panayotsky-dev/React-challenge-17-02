import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Modal from 'react-modal'
import ModalCard from '../ModalCard/ModalCard';


function Card(recipe) {
  const [showModal, setShowModal] = useState(false);
  
  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      {showModal && (
        <ModalCard
          name={recipe.name}
          image={recipe.image}
          firstTag={recipe.firstTag}
          secondTag={recipe.secondTag}
          instructions={recipe.instructions}
          ingredients={recipe.ingredients}
          onClose={toggleModal}
        />
        )}
      <motion.div
        className="card"
        id={recipe.id}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        onClick={toggleModal}
      >
        <img
          className="br-100 h3 w3 dib"
          alt={recipe.name}
          src={process.env.PUBLIC_URL + recipe.image}
        />
        <div className="card-info">
          <h2>{recipe.name}</h2>
          <div className="tag-holder">
            <div className="recipe-tag">{recipe.firstTag}</div>{" "}
            <div className="recipe-tag">{recipe.secondTag}</div>
          </div>
        </div>
      </motion.div>
      
    </>
  );
}


// function Card(recipe) { 
//   const [open,setOpen] = useState(false)
//   const handleOpen = () => setOpen(true)
//   const handleClose = () => setOpen(false)

//   function showDescription(event,name,secondTag,instructions){
//     console.log(name,secondTag,instructions)
    
//   }
//               return (
//                 <>
//       <motion.div className="card" id={recipe.id} whileHover={{scale:1.05,}}
//       transition={{type:"spring", stiffness:200}} 
//       // onClick={() => console.log('click')}
//       onClick={(event) => showDescription(event,recipe.name,recipe.secondTag,recipe.instructions)}>
        
//       <img className="br-100 h3 w3 dib" alt={recipe.name} src={process.env.PUBLIC_URL + recipe.image} />
//       <div className='card-info'>
//         <h2>{recipe.name}</h2>
//         {/* <h3>Ingredients: {recipe.ingredients}</h3>
//         <p>How to make it: {recipe.instructions}</p> */}
//         <div className="tag-holder">
//         <div className="recipe-tag">{recipe.firstTag}</div> <div className="recipe-tag">{recipe.secondTag}</div>
//         </div>
        
//       </div>
//           </motion.div>
          
//           </>
//     )
//   }

 
export default Card



