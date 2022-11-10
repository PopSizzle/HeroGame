import React from 'react';
import './table.css';

const Table = ({ title, cols, data, edit, deleteFunction, editFunction, sort}) => {

  let keys = Object.keys(data);
  let attrs = [...cols];
  
  for(let i=1; i<attrs.length; i++){
    let words = attrs[i].split(' ');
    console.log(words);
    attrs[i] = words[0].slice(0,3).toLowerCase() + words[1].slice(0,3);
  }

  return (
    <div>
      <table className='styled-table'>
        <thead>
          <tr>
            <th>{title}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {cols.map((col, index) => (
              <td key={index}><h4>{col}</h4>{index > 0 ? <div><button onClick={() =>sort(attrs[index], 'ascend')} className='arrow up'></button><button onClick={() => sort(attrs[index], 'descend')}className='arrow down'></button></div> : null}</td>
            ))}
          </tr>
          {
            // If data is provided 
            keys.length > 0 ?
              keys.map(
                key =>
                  <tr key={key}>
                    {Object.keys(data[key]).map(
                      prop => {
                        if (prop !== 'id') {
                          return <td key={prop}>{data[key][prop]}</td>
                        }
                      })}
                    {edit ? <td><button className='styled-button' data-id={key} onClick={editFunction}>Edit</button><button className='styled-button' onClick={deleteFunction} id={key}>Delete</button></td> : null}
                  </tr>)
              :
              // else if no data provided
              <tr>
                {cols.forEach(el => <td></td>)}
              </tr>}
        </tbody>
      </table>
    </div>
  )
}

export default Table;