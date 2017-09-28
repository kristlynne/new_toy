import React, { Component } from 'react';
import {browserHistory, Link } from 'react-router';
import Counter from '../components/Counter';
import GoalsTile from '../components/GoalsTile';
import GoalsContainer from '../containers/GoalsContainer';


class GoalsProgressContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: {}
    }
    this.changeAmount = this.changeAmount.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/goals/${this.props.params.id}`)
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
            throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          goal: body
        })
      })
  }

    handleDelete() {
      fetch(`/api/v1/goals/${this.props.params.id}`, {
        method: 'DELETE',
        credentials: 'same-origin'
      })
      .then(response => response.json())
      .catch((thing) => console.log("so sad"))
      browserHistory.push('/');
      // this.setState({goal: this.state.goal.filter(goal => body.id !== goalId)})
    }

  changeAmount() {
    // let amountPayload = this.state.goal.progress + 1
  fetch(`/api/v1/goals/${this.props.params.id}`, {
    credentials: 'same-origin',
    method: 'PATCH',
    // body: JSON.stringify(amountPayload)
  })
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
      error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {
    this.setState({
      goal: body
    })
  })
}
  render() {
    return(
      <div className='tile' >
        <Counter
          progress={this.state.goal.progress}
          handleClick={this.changeAmount}
          deleteButton={this.handleDelete}
        />
        <h3>Great job! Keep it up! </h3>
        <h3>{this.state.goal.name}</h3>
        <h3>{this.state.goal.description}</h3>
        <h3>{this.state.goal.progress} days </h3>
      </div>
    )
  }
}


export default GoalsProgressContainer;
