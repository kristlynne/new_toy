import React, { Component } from 'react';
import GoalsTile from '../components/GoalsTile';
import {browserHistory, Link } from 'react-router';
import GoalList from '../components/GoalList';

const GoalForm = (props) => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <label>New Goal:
        <input
          name={props.name}
          onChange={props.onChangeFunction}
          type='text'
          value={props.content}
        />
      </label>
      <input className="button" type="submit" value="Submit" />
    </form>
  );
}

export default GoalForm;
