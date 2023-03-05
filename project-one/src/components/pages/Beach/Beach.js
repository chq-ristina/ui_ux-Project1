import React from 'react'
import '../Pages.css';
import SeasideMapImage from '../../../images/Seaside/Seaside_Map_Image.JPG';
import MarioRelaxing from '../../../images/Seaside/Mario_Relaxing.JPG';
import SeasideMapInfo from '../../../images/Seaside/Seaside_MapInfo.JPG';
import SeasideLanding from '../../../images/Seaside/SeasideKingdom_Landing.JPG';
import Swimming from '../../../images/Seaside/Swimming.JPG';
import Volleyball from '../../../images/Seaside/Volleyball.JPG';
import BrickBox from '../../BrickBox';

function Beach() {
  var mapInfo = "Seaside Kingdom is home to the beautiful Bubblaine resort where you can relax and enjoy beach activities.\n" +
  " Make sure to bring your Shell-shaped coins, the currency of Seaside Kingdom!";
  
  var swimmingText = "Pictured here is one of our very own tour guides, Mario, swimming with one of the resident island animals named Dorrie!" + 
  " Not only is Dorrie a fun swimming partner, but she also carries the island's gift shop! You can buy a special Seaside Kingdom sticker and other Seaside essentials right at Dorrie's shop!";
  
  var volleyballText = "Here's Mario getting ready to start a match at Bubblaine's famed volleyball court!\n" +
  " When in Bubblaine, be sure to play an exciting game of beach volleyball.\n" +
  " Are you new to volleyball? No worries! There's an on-site coach to provide strong guidance for every player!";

  var relaxingText = "After a long and exciting day at Bubblaine filled with swimming and volleyball, Mario is in need of rest.\n" +
  " Bubblaine offers many areas of respite for all its guests. There's also a beach house for visitors to escape the hot sun.";

  let brickBoxProps = {
    height: 250,
    width: 500
  }
  
  return (
    <div>
      <h1>Visit the sandy beaches of Seaside Kingdom!</h1>
      <img className='map' src={SeasideMapImage}></img>
      
      <div className='grid-container'>
        <img className='seaside-map-info' src={SeasideMapInfo}></img>
        <BrickBox className='brick-box' {...brickBoxProps} text={mapInfo}/>

        <img className='swimming' src={Swimming}></img>
        <BrickBox className='brick-box' width={brickBoxProps.width} height={350} text={swimmingText}/>

        <img className='volleyball' src={Volleyball}></img>
        <BrickBox className='brick-box' width={brickBoxProps.width} height={300} text={volleyballText}/>

        <img src={MarioRelaxing}/>
        <BrickBox className='brick-box' width={brickBoxProps.width} height={355} text={relaxingText}/>
      </div>
    </div>
  )
}

export default Beach