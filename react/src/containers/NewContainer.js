import React, { Component } from 'react';
import GoalsTile from '../components/GoalsTile';
import {browserHistory, Link } from 'react-router';
import GoalForm from '../components/GoalForm';
import GoalList from '../components/GoalList';

class NewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [],
      newGoal: ""
    }
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
  }

  getGoals() {
    fetch('/api/v1/goals')
    .then(response => response.json())
    .then(body => {
      this.setState({
        goals: body
      });
    })
  }

  componentDidMount() {
    this.getGoals();
  }

  handleTaskChange(event) {
    this.setState({ newGoal: event.target.value })
  }

  handleFormSubmit(event) {
    let goals = this.state.goals
    event.preventDefault();
    fetch('/api/v1/goals', {method: 'POST', credentials: 'same-origin', body: this.state.newGoal})
    .then(response => response.json())
    .then(task => {
      let new_goal_list = goals.push(goal)
      this.setState(goals: new_goal_list)
    })
    .then(() => {
      this.handleClearForm()
    })
  }

  handleClearForm() {
    this.setState({
      newGoal: ''
    })
  }

  render() {
    let goals = this.state.goals.map(goal => {
      return (
        <GoalsTile
          key={goal.id}
          name={goal.name}
        />
      )
    })
    return(
    <div className="goalList">
      <h1>Goal List</h1>
      {goals}
      <GoalForm
        onChangeFunction={this.handleTaskChange}
        handleFormSubmit={this.handleFormSubmit}
        content={this.state.newGoal}
      />
    </div>
    )
  }
}

export default NewContainer;
