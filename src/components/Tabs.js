import React from 'react';
import { Link } from 'react-router-dom';

import * as appConstants from '../constants/common';

/**
 * Component for tabs in app.
 *
 */
const Tabs = () => {
  return (
    <div className="nav-content red">
      <ul className="tabs tabs-transparent">
        <li className="tab">
          <Link to={appConstants.API_TOP_STORIES} className='active'>{appConstants.TOP_STORIES_TXT}</Link>
        </li>
        <li className="tab"><
          Link to={appConstants.API_NEW_STORIES}>{appConstants.NEW_STORIES_TXT}</Link>
        </li>
        <li className="tab">
          <Link to={appConstants.API_BEST_STORIES}>{appConstants.BEST_STORIES_TXT}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
