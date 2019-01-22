import React from 'react';
import { Link } from 'react-router-dom';

import Common from '../constants/common';

/**
 * Component for tabs in app.
 *
 * @class Tabs
 * @extends {React.Component}
 */
class Tabs extends React.Component {

  /**
   * Creates an instance of Tabs.
   *
   * @param {*} props
   * @memberof Tabs
   */
  constructor(props) {
    super(props);
  }

  /**
   * Renders JSX component.
   *
   * @returns
   * @memberof Tabs
   */
  render() {
    return (
      <div className="nav-content red">
        <ul className="tabs tabs-transparent">
          <li className="tab"><Link to={Common.API_TOP_STORIES} className='active'>Top Stories</Link></li>
          <li className="tab"><Link to={Common.API_NEW_STORIES}>New Stories</Link></li>
          <li className="tab"><Link to={Common.API_BEST_STORIES}>Best Stories</Link></li>
        </ul>
      </div>
    );
  }
}

export default Tabs;
