import React from 'react';
import { movies } from '../data';

const MovieDetails = ({
  title,
  time,
  genres,
  metascore
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{time}</p>
      <ul>
        {genres.map(genre => <li>{genre}</li>)}
      </ul>
    </div>
  );
};

const Movies = ({ movieList }) => (
    <div>
      <h1>Movies Page</h1>
      { movieList.map(MovieDetails) }
    </div>
  );

  Movies.defaultProps = {
    movieList: movies
  };

export default Movies;
