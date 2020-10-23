
import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
        return (
          <div className='director'>
            <h1 key={director.name}>{director.name}</h1>
            <ul>
            ß{director.movies.map(movie => <li>{movie}</li>)}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
