import { React, useEffect, useState } from 'react';
import Table from '../../components/Table';
import './roster.css';

// Roster Page Features

// View hero details in a modal (preferably by hovering)

// Sort by ascending/descending in a category

// View Armorys

// Equip heroes with certain items

// Dismiss a hero

const Roster = () =>{

  const [data, setData] = useState([
    {
      name: "Bobby",
      hitPoi: 100,
      phyAtt: 120,
      magAtt: 20,
      phyDef: 60,
      magDef: 60,
    },
    {
      name: "Sally",
      hitPoi: 80,
      phyAtt: 20,
      magAtt: 120,
      phyDef: 40,
      magDef: 100,
    },
    {
      name: "Urza",
      hitPoi: 80,
      phyAtt: 10,
      magAtt: 200,
      phyDef: 10,
      magDef: 60,
    }
  ]);

  useEffect(() =>{
  },[data]);


  let title = 'Hero Roster';
  let cols = ['Name', 'Hit Points', 'Physical Attack', 'Magic Attack', 'Physical Defense', 'Magic Defense'];

  const sortRoster = (attr, dir) =>{

    console.log('clicked: ' + attr)

    let roster = [...data];

    roster= roster.sort(
      function(a,b){
        if(dir === 'ascend') return b[attr] - a[attr];
        else return a[attr] - b[attr];
      }
    )

    setData(roster);
    console.log(data);
  }


  return(
    <div>
      <Table title={title} cols={cols} data={data} edit={false} sort={sortRoster}/>
    </div>
  )
}

export default Roster;