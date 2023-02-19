import React from 'react'
import { Link } from 'react-router-dom'

import ourLogo from '../../Media/logo.png'

export default function Logo() {
  return (
    <>
    <Link to='/'>
    <div className='logo-container'>
        <img 
        className="logo" 
         src={ourLogo} 
         alt='logo1'         
         >

         </img>
    </div>
    </Link>
    </>
  )
}
