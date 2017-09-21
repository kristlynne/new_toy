import React from 'react';
import { Link, browserHistory } from 'react-router';

const GoalsTile = props => {

  return(
    <div>
      <h1>{props.name}</h1>
      <h3>{props.description}</h3>
      <h3>{props.progress}</h3>

    </div>
  )
}

export default GoalsTile;
