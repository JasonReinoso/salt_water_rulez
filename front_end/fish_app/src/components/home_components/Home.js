import React from 'react'
import Menu from '../Menu_components/Menu'
import NavBar from '../Menu_components/NavBar'
import "./Homestyle.css"
import fishy from './bluebit.png'
function Home() {
  return (
    <div className='Homepage'>

        <NavBar/>
        <div className='grid-container'>
          <div className='Bluebit'>
            <img className='fishy'  src={fishy} />
          </div>
          <div className='info'>
            <div className='Motto'>For all of your fishing needs!</div>
            <div className='ad'>Fishing in a unfamiliar state? View fishing regulations by state!</div>
            <div><button className='fish button'>Fishing regulations</button></div>
          </div>
        </div>
    </div>
  )
}

export default Home