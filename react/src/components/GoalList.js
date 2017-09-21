import React, { Component } from 'react';
import GoalsTile from '../components/GoalsTile';
import {browserHistory, Link } from 'react-router';
import GoalForm from '../components/GoalForm';

const GoalList = (props) => {
  let goals = props.tasks.map(goal => {
    return (
      <Goal
        key={goal.id}
        name={goal.name}
      />
    )
  })
  return (
    <ul>
      {goals}
    </ul>
  );
}

export default GoalList;
