import React from 'react';

import Tabs from './components/Tabs';
import NewsList from './components/NewsList';

import './App.css';

/**
 * Main class which controls overall app.
 *
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {

  /**
   * Creates an instance of App.
   *
   * @param {*} props
   * @memberof App
   */
  constructor(props) {
    super(props);
  }

  /**
   * Render method is called automatically. It renders JSX component.
   *
   * @returns
   * @memberof App
   */
  render() {
    return (
      <div className="App container">
        <Tabs />
        <NewsList {...this.props} />
      </div>
    );
  }
}

export default App;
