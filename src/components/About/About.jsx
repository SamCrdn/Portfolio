import React from 'react'
import './about.css'
import ME from '../../assets/blockchain.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Junior</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Motivation<br></br>&  Desire to learn</h5>
              <small>200%</small>
            </article>
          </div>

          <p>
          Recently graduated from Alyra, the first French school specializing in blockchain. <br/>
          I am looking for a new professional experience to apply my skills as a Blockchain developer in the creation of decentralized applications (DApps).
          <br />
          <br />
          Passionate about the blockchain universe and its ecosystem, I started my professional retraining 8 months ago.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          <a href="cv.pdf" download='Samuel Cardon CV' className='btn btn-primary2'>Download CV</a>
        </div>
      </div>
    </section>
  )
}

export default About