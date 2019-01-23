import React from 'react';

import Tabs from './components/Tabs';
import NewsList from './components/NewsList';

import './index.css';

/**
 * Main class which controls overall app.
 *
 * @param {Object} props
 */
const App = (props) => {
  return (
    <div className="App container">
      <Tabs />
      <NewsList {...props} />
    </div>
  );
};

export default App;
