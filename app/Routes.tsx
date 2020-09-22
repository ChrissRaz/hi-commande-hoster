/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import Starter from './containers/Starter';
import StarterConfiguration from './containers/StarterConfig/StarterConfig';



export default function Routes() {
  return (
    <App>
      <Switch>
        {/* <Route path={routes.COUNTER} component={CounterPage} /> */}
        <Route path={routes.HOME} component={HomePage} />
        <Route path={routes.START} exact component={Starter} />
        <Route path={routes.STARTSETTING} component={StarterConfiguration} />

        <Route path="*">
          <div>Something went wrong, routing problem</div>
        </Route>
      </Switch>
    </App>
  );
}
