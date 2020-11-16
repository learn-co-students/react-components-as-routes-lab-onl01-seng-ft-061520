import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => (
          <div>
            <p>Title:{movie.title}</p>
            <p>Time:{movie.time}</p>
            <ul><h3>Genres</h3>
        {movie.genres.map(genre => <li>{genre}</li>)}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
