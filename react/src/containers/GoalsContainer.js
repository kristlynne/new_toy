import React, { Component } from 'react';
import GoalsTile from '../components/GoalsTile';
import {browserHistory, Link } from 'react-router';
import GoalsProgressContainer from '../containers/GoalsProgressContainer';
// this is your index page after sign in

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
    <div className='container'>
      <h1>BrightSpell </h1>
      <h2>The future is bright! </h2>
      <h2>Here are your goals.</h2>
      {goalsComponents}
      <Link to={`/goals/new`} >Add a New Goal </Link>
    </div>
    )
  }
}
export default GoalsContainer;
