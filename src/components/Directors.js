import React from 'react';
import { directors } from '../data';

const DirectorDetails = ({
  name,
  movies
}) => {
  return (
    <div>
      <p>{name}</p>
      <ul>
        {movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  );
};

const Directors = ({directorList}) => {
  return (
    <div>
      <h1>Directors Page</h1>
      { directorList.map(DirectorDetails)}
    </div>
  );
}

Directors.defaultProps = {
  directorList: directors
};

export default Directors
