import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLoom} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SAMUEL CARDON </a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/samuel-cardon-developpeur-blockchain/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/SamCrdn" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://loom.com/invite/34b02f8f76d749b7a42d3a8e2f6f7951" target="_blank" rel="noreferrer"><SiLoom/></a>
      </div>

      <div className="footer__copyright">
      </div>
    </footer>
  )
}

export default Footer