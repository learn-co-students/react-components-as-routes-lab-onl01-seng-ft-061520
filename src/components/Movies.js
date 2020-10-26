import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div>
          <h3>Movie: {movie.title}</h3>
          <h3>Time: {movie.time}</h3>
          <ul>
            {movie.genres.map((genre, index) => (
              <li>
                {genre}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
