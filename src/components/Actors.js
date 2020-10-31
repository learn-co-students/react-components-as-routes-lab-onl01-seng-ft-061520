import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return (
          <div className="actor">
            <h2>Name: {actor.name}</h2>

            <ul>
              {actor.movies.map(m => <li>{m}</li>)}
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
