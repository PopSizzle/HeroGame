import React from 'react';
import HeroCard from '../../components/HeroCard';
import './tavern.css';
import garruk from '../../assets/Garruk.jpg';
import ajani from '../../assets/Ajani.jpg';
import urza from '../../assets/Urza.jpg';
import jace from '../../assets/Jace.jpg';
import liliana from '../../assets/Liliana.jfif';

// Tavern Features

// View details about available heroes

// Hire new heroes

// View current roster

// Refresh heroes for hire

const heroes = [
  {
    name: "Garruk",
    type: 'Berserker',
    imgSRC: garruk,
    hitPoi: 120,
    phyAtt: 150,
    magAtt: 0,
    phyDef: 50,
    magDef: 20,
  },
  {
    name: "Ajani",
    type: 'Warrior',
    imgSRC: ajani,
    hitPoi: 100,
    phyAtt: 120,
    magAtt: 60,
    phyDef: 80,
    magDef: 60,
  },
  {
    name: "Urza",
    type: 'Archmage',
    imgSRC: urza,
    hitPoi: 60,
    phyAtt: 10,
    magAtt: 200,
    phyDef: 10,
    magDef: 60,
  },
  {
    name: "Jace",
    type: 'Wizard',
    imgSRC: jace,
    hitPoi: 80,
    phyAtt: 30,
    magAtt: 120,
    phyDef: 40,
    magDef: 100,
  },
  {
    name: "Liliana",
    type: 'Necromancer',
    imgSRC: liliana,
    hitPoi: 70,
    phyAtt: 20,
    magAtt: 160,
    phyDef: 20,
    magDef: 80,
  }
]

const Tavern = () =>{

  return(
    <div>
    <div>
      Welcome to the Tavern
    </div>

      {heroes.map( (hero,index) => {
        return(
        <div key={index+1}> 
          <HeroCard id={index+1}imgSRC={hero.imgSRC} name={hero.name} hitPoi={hero.hitPoi} phyAtt={hero.phyAtt} magAtt={hero.magAtt} phyDef={hero.phyDef} magDef={hero.magDef} type={hero.type}/>
        </div>
      )})}
    </div>
  )

}

export default Tavern;