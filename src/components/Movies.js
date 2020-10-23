import React from 'react';
import { movies } from '../data';


const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
    {movies.map(movie => {
      return (
        <div className='movie'>
          <h1>Name: {movie.title}</h1>
          <h2>Time: {movie.time}</h2>
          <ul>Genres:
            <br/>
            {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
          </ul>
        </div>
      )
    })}
  </div>
  );
};

export default Movies;
