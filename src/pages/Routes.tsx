import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LandingJobSeeker, Home, PageNotFound, MyTasks, TaskCreation } from './index';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingJobSeeker} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/task-creation" component={TaskCreation} />
        <Route exact path="/my-tasks" component={MyTasks} />
        <Route exact path="/my-tasks/:id" />

        {/* <Route exact path="/">
          <Redirect to="/home" />
          <Route path="/home" component={Home} />
        </Route> */}
        <Route path="*" component={PageNotFound} />
      </Switch>
    </>
  );
}
