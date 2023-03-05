import React from 'react';
import '../Pages.css';
import BrickBox from '../../BrickBox';
import CascadeInfo from '../../../images/Cascade/cascade_info.JPG';
import CascadeMap from '../../../images/Cascade/cascade_map.JPG';
import CascadeView from '../../../images/Cascade/cascade_view.JPG';
import Dino from '../../../images/Cascade/dinosaur.JPG';
import Falls from '../../../images/Cascade/falls.JPG';

function Educational() {
  let width = 500;

  var infoText = "Welcome to Cascade Kingdom! While here make sure to vist Fossil Falls!";

  var fallsText = "There are many waterfalls in Cascade Kingdom but the area known as Fossil Falls is a special one.\n" +
  "There are few sights in nature as grand as the millions of gallons of water pouring every second out of this giant triceratops skeleton.";

  var viewText = "Here is our tour guide, Mario, standing at the top of Fossil Falls. You can see all of Cascade Kingdom from the top of the marvelous waterfall!";

  var dinoText = "The biggest draw for tourists to this area is that dinosaurs still live here! Many people are willing to put themselves at risk to get a glimpse of these ancient animals, including our very own Mario!\n" +
  "The kingdom's resident T-Rex loves to spend most of her time napping. But when she's awake she can pulverize a boulder with a single blow!";

  return (
    <div>
      <h1>Visit a piece of history at Cascade Kingdom!</h1>
      <img className='map' src={CascadeMap}></img>

      <div className='grid-container'>
        <img src={CascadeInfo}></img>
        <BrickBox width={width} height={215} text={infoText}/>

        <img src={Falls}></img>
        <BrickBox width={width} height={250} text={fallsText}/>

        <img src={CascadeView}/>
        <BrickBox width={width} height={250} text={viewText}/>

        <img src={Dino}/>
        <BrickBox width={width} height={250} text={dinoText}/>
      </div>
    </div>
  )
}

export default Educational