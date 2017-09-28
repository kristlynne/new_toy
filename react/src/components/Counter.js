import React, {Component} from 'react';
import GoalsContainer from '../containers/GoalsContainer';
import GoalsProgressContainer from '../containers/GoalsProgressContainer';


const Counter = (props) => {
    let handleDelete = () =>{
      props.deleteButton(props.id)
    }
    let goalReachAlert = ""
    if (props.progress >= 10) {
      goalReachAlert = "Congrats! You've reached your goal!"
    }

    let gifs = [
      "https://i.imgur.com/wHcn8He.gif",
      "https://i.imgur.com/sPNGuqN.gif",
      "https://i.imgur.com/8GnZpJi.gif",
      "https://i.imgur.com/O5BS24J.gif",
      "https://i.imgur.com/MfwoTEh.gif"
    ]

    let index = Math.min(Math.floor(props.progress/2.5), 4)
    let gif = gifs[index]
    return (
      <div className='tile'>
          <h1>Did you reach your goal today?</h1>
        <button onClick={props.handleClick}>
          YES!
        </button>
          <h3> {goalReachAlert} </h3>
        <img src={gif} />
        <button onClick={handleDelete}>
          Delete Goal
        </button>
      </div>
    );
}



export default Counter;
