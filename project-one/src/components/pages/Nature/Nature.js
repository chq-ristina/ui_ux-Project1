import React from 'react';
import '../Pages.css';
import WoodedMap from '../../../images/Wooded/wooded_map.JPG';
import WoodedInfo from '../../../images/Wooded/wooded_info.JPG';
import Pathway from '../../../images/Wooded/pathway.JPG';
import Guardians from '../../../images/Wooded/guardians.JPG';
import Flowers from '../../../images/Wooded/flowers.JPG';
import Factory from '../../../images/Wooded/factory.JPG';
import BrickBox from '../../BrickBox';

function Nature() {
  let width = 500;

  var mapText = "Wooded Kingdom is home to the Steam Gardens, the world's most advanced greenhouse.\n" +
  "most of its population is made up of robots created to aid in taking care of the many plants there.";

  var factoryText = "The Wooded Kingdom is filled with giant red machines just like the one pictured here. No one knows " +
  "who built these structures but the gardeners here use them to maintain the gardens.";

  var guardiansText = "Visitors are welcomed not just by the humid air, but also the worker robots tending the flowers. These robots are known as Steam Gardeners. "+
  "These robots love flowers, some even grow them out of their heads! You'll feel the Steam Gardeners' warm hearts, from their flowers and also their internal steam pumps.";

  var flowersText = "Steam Gardens is home to the famed Soirée Bouquet. The beuatiful white flowers that grow here are the most popular for wedding ceremonies!";

  var pathwayText = "There are various growing walkways around Steam Garden called the Flower Road. The plants will grow in temporary but walkable bridges. " +
  "CAUTION: NOT RECOMENDED FOR YOUNG CHILDREN!";

  return (
    <div>
      <h1>Visit the beautiful forest of the Wooded Kingdom!</h1>
      <img className='map' src={WoodedMap}/>

      <div className='grid-container'>
        <img src={WoodedInfo}></img>
        <BrickBox className='brick-box' width={width} height={220} text={mapText}/>

        <img src={Factory} /*style={{width: 500}}*//>
        <BrickBox className='brick-box' width={width} height={500} text={factoryText} style="align-self: center;"/>

        <img src={Guardians}></img>
        <BrickBox className='brick-box' width={width} height={250} text={guardiansText}/>

        <img src={Flowers}/>
        <BrickBox className='brick-box' width={width} height={250} text={flowersText}/>

        <img src={Pathway}/>
        <BrickBox className='brick-box' width={width} height={250} text={pathwayText}/>

      </div>
    </div>
  )
}

export default Nature