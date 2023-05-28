import React from 'react'
import img from '../Images/img'
import '../Styles/Footer.css'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
   <div className='conteinerFooter'>
    <div className='pie-pagina'>
      <div className='box'>
        <figure>
          <a href="#"><img src={img.img1} alt="" /></a>
        </figure>
      </div>
      <div className='box'>
        <h2>SOBRE NOSOTROS</h2>
      <p>asfasf asfas asfasf asfasfa asfasf asfasf asfasf asfasas asfasf</p>
       <p>dasdas dasdadada dsadd asdsadasdasdasda sdas dadasd</p>
        
      </div>
      <div className='box'>
        <h2>SIGUENOS</h2>
        <div className='redSocial'>
          <a href="#" className='facebook'><FaFacebook/></a>
          <a href="#"><FaTwitter/></a>
          <a href="#"><FaYoutube/></a>
          <a href="#"><FaInstagram/></a>
        </div>
      </div>
    </div>
    <div className='grupoDos'> 
      <small>&copy; 2023 <b>Bravo Man</b> Todos Los Derechos Reservados.</small>
    </div>


    
   </div>
  )
}

export default Footer