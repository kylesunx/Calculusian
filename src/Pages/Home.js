import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='home-main-wrapper'>
        <div className='home-cards'>
          <h2 className='title-card'>Let’s Go! and Learn..</h2>
          <p className='text-card'>If you're having problems learning with your computer science course, start learning with us.</p>
          <button className='btn-cards'><Link to='/'>Learn more</Link></button>
        </div>
        <div className='home-cards'>
          <h2 className='title-card'>Let’s Go! and Learn..</h2>
          <p className='text-card'>If you're having problems learning with your computer science course, start learning with us.</p>
          <button className='btn-cards'><Link to='/courses'>Learn more</Link></button>
        </div>
        <div className='home-cards'>
          <h2 className='title-card'>Let’s Go! and Learn..</h2>
          <p className='text-card'>If you're having problems learning with your computer science course, start learning with us.</p>
          <button className='btn-cards'><Link to='/quiz'>Learn more</Link></button>
        </div>
        <div className='home-cards'>
          <h2 className='title-card'>Let’s Go! and Learn..</h2>
          <p className='text-card'>If you're having problems learning with your computer science course, start learning with us.</p>
          <button className='btn-cards'><Link to='/games'>Learn more</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Home