import React from 'react';
import '../Pages.css';
import MetroInfo from '../../../images/Metro/metro_info.JPG';
import MetroMap from '../../../images/Metro/metro_map.JPG';
import MetroView from '../../../images/Metro/metro_view.JPG';
import Park from '../../../images/Metro/park.JPG';
import Scooter from '../../../images/Metro/scooter.JPG';
import Store from '../../../images/Metro/store.JPG';
import BrickBox from '../../BrickBox';

function CityLife() {
  var mapText = "Welcome to New Donk City in Metro Kingdom! It's the city that never leaps.";

  var viewText = "Here is our tour guide, Mario, gazing at the beautiful view of New Donk City. The city is filled with "+
  "sky scrappers that people can't help but think of when they think of New Donk City";

  var storeText = "New Donk City is home to the Crazy Cap flagship store!\n" +
  " Their unique storefront is converted from an old theater. Theater space is no longer in demand, with so many street performers in the city.";

  var parkText = "Although New Donk City is an urban paradise, there are still plenty of green spaces in the city.\n" +
  "The park Mario is pictured in has fun activities for all! You can jump rope with the locals and even try to unscramble the letters pictured behind Mario.";

  var scooterText = "These motor scooters may look old-fashioned, but they pack a punch and are perfect for tooling around the city. Be sureto try one out!";

  let brickBoxProps = {
    height: 250,
    width: 500
  }
  return (
    <div>
      <h1>See the hustle and bustle of the big city at Metro Kingdom!</h1>
      <img className='map' src={MetroMap}></img>

      <div className='grid-container'>
        <img src={MetroInfo}></img>
        <BrickBox className='brick-box' width={brickBoxProps.width} height={225} text={mapText}/>

        <img src={MetroView}/>
        <BrickBox className='brick-box' width={brickBoxProps.width} height={345} text={viewText} />

        <img src={Store}></img>
        <BrickBox className='brick-box' width={brickBoxProps.width} height={545} text={storeText}/>

        <img src={Park}/>
        <BrickBox className='brick-box' width={brickBoxProps.width} height={300} text={parkText}/>

        <img src={Scooter}/>
        <BrickBox className='brick-box' width={brickBoxProps.width} height={325} text={scooterText}/>
      </div>
    </div>
  )
}

export default CityLife