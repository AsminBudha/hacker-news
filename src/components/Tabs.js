import React from 'react';
import { Link } from 'react-router-dom';

import Common from '../constants/common';

/**
 * Component for tabs in app.
 *
 */
const Tabs = () => {
  return (
    <div className="nav-content red">
      <ul className="tabs tabs-transparent">
        <li className="tab"><Link to={Common.API_TOP_STORIES} className='active'>Top Stories</Link></li>
        <li className="tab"><Link to={Common.API_NEW_STORIES}>New Stories</Link></li>
        <li className="tab"><Link to={Common.API_BEST_STORIES}>Best Stories</Link></li>
      </ul>
    </div>
  );
};

export default Tabs;
