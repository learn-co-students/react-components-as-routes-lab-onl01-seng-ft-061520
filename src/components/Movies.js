import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>
        Movies Page
        </h1>
      {movies.map(mov => {
        return (
          <div>
            <h2>Name: {mov.title}</h2>
            <p>Time: {mov.time}</p>
            <ul>
              {mov.genres.map(g => <li>{g}</li>)}
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Movies;
