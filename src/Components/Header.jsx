import React from 'react'
import '../Styles/header.css';

import img from '../Images/img';




const Header = () => {
  return (
    
    <div className='contentHeder'>
     
      
        <div className='logo'>
      
      <nav className='Nav' id='menu'>
      <a href="#">
        <img src={img.img4} height={50} width={70}/>  
      </a>
     
      <ul >
        <li><a href="$">Quienes Somos</a></li>
        <li><a href="#">Que Hacemos</a></li>
        <li><a href="s">horarios</a></li>
        <li><a href="s">Turnos</a></li>
      </ul>
      </nav>

      </div>
     
      
      
    </div>
     
    
    

  )
}

export default Header
