import React from 'react';
import './heroCard.css';

// Name of hero
// Picture of hero
// Hero stats
// Hero Traits
// Hero Bio;

const HeroCard = ({ imgSRC, name, hitPoi, phyAtt, magAtt, phyDef, magDef, type, id }) => {

  return (
    <div key={id} className="container">
      <div className="card">
        <div className="card-header">
          <img src={imgSRC} alt="rover" />
        </div>
        <div className="card-body">
          <span className="tag tag-teal">{type}</span>
          <h3>{name}</h3>
          <h5>Hit Points: {hitPoi}</h5>
          <h5>Physical Attack: {phyAtt}</h5>
          <h5>Magic Attack: {magAtt}</h5>
          <h5>Physical Defense: {phyDef}</h5>
          <h5>Magic Defense: {magDef}</h5>
        </div>
      </div>
    </div>
      )
}

      export default HeroCard;