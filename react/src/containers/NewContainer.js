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
      newGoalName: "",
      newGoalDescription: ""
    }
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

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

  handleNameChange(event) {
    this.setState({ newGoalName: event.target.value })
  }

  handleDescriptionChange(event) {
    this.setState({ newGoalDescription: event.target.value })
  }

  handleFormSubmit(event) {
    let goals = this.state.goals
    let payload = JSON.stringify({
      goal: {
        name: this.state.newGoalName,
        description: this.state.newGoalDescription
      }
    })
    event.preventDefault();
    fetch('/api/v1/goals', {
      method: 'POST',
      credentials: 'same-origin',
      body: payload
    })
    .then(response => response.json())
    .then(goal => {
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
          id={goal.id}
          key={goal.id}
          name={goal.name}
          description={goal.description}
          progress={goal.progress}
        />
      )
    })
    return(
    <div className="goalList">
      {goals}
      <GoalForm
        nameChangeFunction={this.handleNameChange}
        descriptionChangeFunction={this.handleDescriptionChange}
        handleFormSubmit={this.handleFormSubmit}
        content={this.state.newGoal}
      />
    </div>
    )
  }
}

export default NewContainer;
