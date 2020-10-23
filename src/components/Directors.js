import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
            <h4>Name: {director.name}</h4>
            <h4>Movies:</h4>
            <ul>
                {director.movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>
        </div>
    ))}
    </div>
  );
}

export default Directors
