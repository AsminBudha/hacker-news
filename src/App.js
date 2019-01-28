import React from 'react';
import { Redirect } from 'react-router-dom';

import Tabs from './components/Tabs';
import NewsList from './components/NewsList';
import appConstants from './constants/common';
import * as localStorage from './services/localStorage';

import './index.css';

/**
 * Main class which controls overall app.
 *
 * @param {Object} props
 */
const App = (props) => {
  const isLoggedIn = localStorage.getLocalStorage('isLoggedIn') === 'true';
  const component = isLoggedIn ?
    <>
      <Tabs {...props} />
      <NewsList {...props} />
    </> :
    <Redirect to={appConstants.PATH_LOGIN} />
    ;

  return (
    <div className="App">
      {component}
    </div>
  );
};

export default App;
