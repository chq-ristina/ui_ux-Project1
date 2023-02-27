import React from 'react'
import './Home.css';
import BrickBox from '../../BrickBox';
import kingdoms from '../../../images/smo_kingdoms.jpg';

function Home() {
  var welcome = "Thank you for visiting the super mario odyssey kingdoms!";
  let brickBoxProps = {
    text: welcome,
    height: 200,
    width: 400
  }

  return (
    <div className='home'>
        <h1>Welcome to the kingdoms of Super Mario Odyssey!</h1>
        {/*<div className='home-content'> */}
          <img className='kingdoms' src={kingdoms}></img>
          <BrickBox className='brick-box' {...brickBoxProps}/>
        {/*</div>*/}
        
        
    </div>
  )
}

export default Home