import React from 'react'
import './Home.css';
import BrickBox from '../../BrickBox';
import kingdoms from '../../../images/smo_kingdoms.jpg';

function Home() {
  var welcome = "The kingdoms of Super Mario Odyssey provide a plethora of experiences for each visitor. From the beaches in Seaside Kingdom, the five star meals in Luncheon Kingdom, and the advantages of the city in Metro Kingdom, we have something for everyone!";
  let brickBoxProps = {
    text: welcome,
    height: 250,
    width: 1000
  }

  return (
    <div className='home'>
        <h1>Welcome to the kingdoms of Super Mario Odyssey!</h1>
        <div className='home-content'>
          <img className='kingdoms' src={kingdoms}></img>
          <div className='brick-box'>
            <BrickBox className='brick-box' {...brickBoxProps}/>
          </div>
        </div>
    </div>
  )
}

export default Home