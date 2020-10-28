import React from 'react';
import { actors } from '../data';

const ActorDetails = ({
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

const Actors = ({actorList}) => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList.map(ActorDetails)}
    </div>
  );
};

Actors.defaultProps = {
  actorList: actors
};

export default Actors;
