import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>
        Directors Page
        </h1>
      {directors.map(dir => {
        return (
          <div>
            <h2>Name: {dir.name}</h2>
            <p>Movies:</p>
            <ul>
              {dir.movies.map(m => <li>{m}</li>)}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
