import React from 'react';
import { Link, browserHistory } from 'react-router';

const GoalsTile = props => {

  return(
    <Link to={`/goals/${props.id}/edit`}>
      <div className='tile'>
        <h2>{props.name}</h2>
        <h2>{props.description}</h2>
        <h3>{props.progress} days </h3>
      </div>
    </Link>
  )
}

export default GoalsTile;
