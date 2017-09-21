import React, { Component } from 'react';
import GoalsTile from '../components/GoalsTile';
import {browserHistory, Link } from 'react-router';

class GoalsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: []
    }
  }
  componentDidMount(){
    fetch('/api/v1/goals')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} ${response.statusText}`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(body => {
     this.setState({
       goals: body
     })
   })
   .catch(error => console.error(`Error in fetch: ${error.message}`));
 }


  render() {

    let goalsComponents = this.state.goals.map(goal => {
    return (
      <div className='container'>
        <h1>Welcome! Here are your goals</h1>
          <GoalsTile
            key={goal.id}
            id={goal.id}
            name={goal.name}
            description={goal.description}
            progress={goal.progress}
          />
    </div>
    )
  })
  return(
    <div>
      <p>Make a good choice.</p>
      {goalsComponents}
      <Link to={`/goals/new`} >Add a New Goal </Link>
    </div>
    )
  }
}
export default GoalsContainer;
