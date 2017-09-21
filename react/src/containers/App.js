import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import GoalsContainer from './GoalsContainer';
import NewContainer from './NewContainer';

const App = (props) => {
  return (
    <Router history={browserHistory} >
      <Route path='/' >
        <IndexRoute component={GoalsContainer} />
      </Route>
      <Route path='/goals/new' component={NewContainer}/>
    </Router>
  )
}

export default App;
