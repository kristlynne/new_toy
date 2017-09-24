import React, {Component} from 'react';
import GoalsContainer from '../containers/GoalsContainer';
import GoalsProgressContainer from '../containers/GoalsProgressContainer';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      amount: this.props.progress,
      lastPercent: this.props.percent,
      percent: null,
      error: "",
      percentCounter: ""
    }
    this.handleAdd = this.handleAdd.bind(this)
    // this.handleSubtract = this.handleSubtract.bind(this)
  }

  componentDidMount() {
    let percent = Math.round((this.state.amount / this.state.daily) * 100)
    this.setState({percent: percent})
  }

  handleAdd(event) {
    let newAmount = this.state.amount + 1
    let amountPayload = newAmount
    this.props.changeAmount(amountPayload)
    let percent = Math.round((newAmount / this.state.progress) * 100)
    this.setState({amount: newAmount})
    this.setState({lastPercent: this.state.percent})
    this.setState({percent: percent})
  }

  render() {
    let goalReachAlert = ""
    if (this.state.amount >= this.props.dailyGoal) {
      goalReachAlert = "Congrats! You've reached your goal!"
    }
    return(
      <div className='counter'>
      <h2>Did you reach your goal today? </h2>
        <div className='add'>
          <i onClick={this.handleAdd}></i>
        </div>
      <h2> {this.state.metric} </h2>
        <p> {this.state.error} </p>
        <h3> {goalReachAlert} </h3>
        <h4> Progress: {this.state.percentCounter}% </h4>
      </div>
    )
  }
}

export default Counter;
