import React from 'react'

const Footer = () => {
  return (
    <footer>
        <p>Powered by MONIK and PIPE</p>
        <img src="./public/images/DH.png" alt='DH-logo' />
        <ul>
          <li><img className='imagenes' src="public\images\ico-facebook.png"alt="Facebook" /></li>
          <li><img className='imagenes' src="public\images\ico-instagram.png" alt="" /></li>
          <li><img className='imagenes' src="public\images\ico-tiktok.png"alt="Facebook" /></li>
          <li><img className='imagenes' src="public\images\ico-whatsapp.png" alt="" /></li>
        </ul>
    </footer>
  )
}

export default Footer
