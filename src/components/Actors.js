import { actors } from '../data';
import React from 'react';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return (
          <div className='actor'>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map(movie => <li>{movie}</li>)}
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
