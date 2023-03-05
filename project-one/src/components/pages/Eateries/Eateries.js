import React from 'react'
import '../Pages.css';
import BrickBox from '../../BrickBox';
import Carnival from '../../../images/Luncheon/carnival.JPG';
import LuncheonInfo from '../../../images/Luncheon/luncheon_info.JPG';
import LuncheonMap from '../../../images/Luncheon/luncheon_map.JPG';
import LuncheonView from '../../../images/Luncheon/luncheon_view.JPG';

function Eateries() {
  let width = 500;

  var infoText = "Luncehon is the place to be if you want amazing food. The locals, Volbonans know how to make a great feast. You will definitely not starve here.";

  var viewText = "Here is our tour guide, Mario, standing in front of the famed Mount Volbono. It's surrounded by bright pink lava and the volcano itself is covered in bright vibrant colors \n" +
  "Luncheon Kingdom is famous for its cuisine, with their dishes simmered over Mount Volbono and filled with local produce that grows to enormous sizes.";

  var carnivalText = "The highlight of Luncheon Kingdom's year is the Cooking Carnival where visitors all over the world come to sample the famous Stupendous Stew.";

  return (
    <div>
      <h1>Get the best food you'll ever have at Luncheon Kingdom</h1>
      <img className='map' src={LuncheonMap}/>

      <div className='grid-container'>
        <img src={LuncheonInfo}></img>
        <BrickBox width={width} height={225} text={infoText}/>

        <img src={LuncheonView}/>
        <BrickBox width={width} height={530} text={viewText}/>

        <img src={Carnival}/>
        <BrickBox width={width} height={360} text={carnivalText}/>
      </div>
    </div>
  )
}

export default Eateries