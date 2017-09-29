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

    this.getGoals = this.getGoals.bind(this)
  }

 getGoals() {
   fetch('/api/v1/goals', {
     method: 'GET',
     credentials: 'same-origin'
   })
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

  shouldComponentUpdate(nextProps, nextState) {
    this.getGoals();
    return true;
  }

  componentDidMount(){
    this.getGoals();
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
    <div>
      <div className='container'>
        <h1>BrightSpell </h1>
      </div>
      <div className='body'>
        <h2>The future is bright! </h2>
      </div>
      <div className='tile'>
        <h2>Here are your goals.</h2>
      </div>
        {goalsComponents}
        <Link to={`/goals/new`} >Add a New Goal </Link>
    </div>
    )
  }
}
export default GoalsContainer;
