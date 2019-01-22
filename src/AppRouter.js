import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';
import Header from './components/Header';
import NotFound from './components/NotFound';
import AppConstants from './constants/common';

/**
 *
 *
 * @class AppRouter
 * @extends {React.Component}
 */
class AppRouter extends React.Component {

  /**
   * Renders JSX component.
   *
   * @returns
   * @memberof AppRouter
   */
  render() {

    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={(props) => <App {...props} />} />
            <Route path={AppConstants.API_TOP_STORIES} exact component={(props) => <App {...props} />} />
            <Route path={AppConstants.API_NEW_STORIES} exact component={(props) => <App {...props} />} />
            <Route path={AppConstants.API_BEST_STORIES} exact component={(props) => <App {...props} />} />
            <Route render={(props) => <NotFound {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
