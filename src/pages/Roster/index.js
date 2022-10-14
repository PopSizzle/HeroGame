import React from 'react';
import Table from '../../components/Table';
import './roster.css';

// Roster Page Features

// View hero details in a modal (preferably by hovering)

// Sort by ascending/descending in a category

// View Armory

// Equip heroes with certain items

// Dismiss a hero

const Roster = () =>{

  let title = 'Hero Roster';
  let cols = ['Name', 'HP', 'Physical Attack', 'Magic Attack', 'Physical Defense', 'Magic Defense'];
  let data = [
    {
      name: "Bobby",
      hp: 100,
      physAtt: 120,
      magAtt: 20,
      physDef: 60,
      magdef: 60
    },
    {
      name: "Sally",
      hp: 80,
      physAtt: 20,
      magAtt: 120,
      physDef: 40,
      magdef: 100
    }
  ]


  return(
    <div>
      <Table title={title} cols={cols} data={data} edit={false}/>
    </div>
  )
}

export default Roster;