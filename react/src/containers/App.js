import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import GoalsContainer from './GoalsContainer';
import NewContainer from './NewContainer';
import GoalsProgressContainer from './GoalsProgressContainer';

const App = (props) => {
  return (
    <Router history={browserHistory} >
          <Route path='/' >
          <IndexRoute component=
    {GoalsContainer} />
          <Route path='/goals/new' component=
    {NewContainer}/>
          <Route path='/goals/:id/edit' component=
    {GoalsProgressContainer}/>
          </Route>
        </Router>
  )
}

export default App;
