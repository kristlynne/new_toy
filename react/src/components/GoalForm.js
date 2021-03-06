import React, { Component } from 'react';
import GoalsTile from '../components/GoalsTile';
import {browserHistory, Link } from 'react-router';
import GoalList from '../components/GoalList';

const GoalForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleFormSubmit}>
          <input type='text'
            placeholder='name'
            name={props.name}
            onChange={props.nameChangeFunction}
            value={props.content}
          />
          <br />
          <input type='text'
            placeholder='description'
            description={props.description}
            onChange={props.descriptionChangeFunction}
            value={props.content}
          />
          <br />
          <input className="btn" type="submit" value="Add Goal" />
      </form>
    </div>
  );
}

export default GoalForm;
