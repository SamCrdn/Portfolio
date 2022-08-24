import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLoom} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/samuel-cardon-developpeur-blockchain/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/SamCrdn" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://loom.com/invite/34b02f8f76d749b7a42d3a8e2f6f7951" target="_blank" rel="noreferrer"><SiLoom/></a>
    </div>
  )
}

export default HeaderSocials