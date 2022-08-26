import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/vote.jpg'
import IMG2 from '../../assets/stacking.jpg'
import IMG3 from '../../assets/nft.png'
import IMG4 from '../../assets/rz.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Decentralized Voting DApp',
    github: 'https://github.com/SamCrdn/Voting_DApp',
    demo: 'https://www.loom.com/share/1666191a7db24251928d0a2148f5f00c'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Stacking DApp',
    github: 'https://github.com/SamCrdn/Staking-DApp',
    demo: 'https://www.loom.com/share/6cd52b6ef80042f798b723c6f2340467'
  },
  {
    id: 3,
    image: IMG3,
    title: 'NFT MarketPlace',
    github: 'https://github.com/SamCrdn/Project4_Alyra',
    demo: 'https://www.loom.com/share/863630cbb7f04915b46ac24133851b82'
  },
  {
    id: 4,
    image: IMG4,
    title: 'RapMinerz App',
    github: 'https://github.com',
    demo: 'https://www.loom.com/share/9e57f63b7e624438874f69701587bc76'
  },
 
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio