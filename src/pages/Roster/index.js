import React from 'react';
import Table from '../../components/Table';
import './roster.css';

const Roster = () =>{

  let title = 'Hero Roster';
  let cols = ['Name', 'HP', 'Damage'];
  let data = [
    {
      name: "Bobby",
      hp: 100,
      damage: 20
    },
    {
      name: 'Sally',
      hp: 80,
      damage: 30
    }
  ]


  return(
    <div>
      <Table title={title} cols={cols} data={data} edit={false}/>
    </div>
  )
}

export default Roster;