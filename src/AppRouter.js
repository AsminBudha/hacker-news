import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';
import Login from './components/Login';
import Header from './components/Header';
import NotFound from './components/NotFound';
import SinglePost from './components/SinglePost';
import * as appConstants from './constants/common';

/**
 * Component for routing.
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
        <div className='container-fluid'>
          <Route path='/' component={(props) => <Header {...props} />} />
          <Switch>
            <Route path='/' exact component={(props) => <App {...props} />} />
            <Route path={appConstants.API_TOP_STORIES} exact component={(props) => <App {...props} />} />
            <Route path={appConstants.API_NEW_STORIES} exact component={(props) => <App {...props} />} />
            <Route path={appConstants.API_BEST_STORIES} exact component={(props) => <App {...props} />} />
            <Route path={appConstants.API_ITEM_SINGLE} exact component={(props) => <SinglePost {...props} data={props.location.state.data} />} />
            <Route path={appConstants.PATH_LOGIN} exact component={(props) => <Login {...props} />} />
            <Route render={(props) => <NotFound {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
