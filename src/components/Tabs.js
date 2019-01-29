import React from 'react';
import { Link } from 'react-router-dom';

import * as appConstants from '../constants/common';

/**
 * Component for tabs in app.
 *
 * @param {Object} props
 */
const Tabs = (props) => {
  const { pathname } = props.location;
  const classForLink = {};

  classForLink[appConstants.TOP_STORIES] = 'nav-link ' + (appConstants.API_TOP_STORIES === pathname && 'active');
  classForLink[appConstants.NEW_STORIES] = 'nav-link ' + (appConstants.API_NEW_STORIES === pathname && 'active');
  classForLink[appConstants.BEST_STORIES] = 'nav-link ' + (appConstants.API_BEST_STORIES === pathname && 'active');

  return (
    <div className='nav-content'>
      <ul className="tabs tabs-transparent nav nav-tabs row tabs">
        <li className="tab nav-item col-sm tab-item">
          <Link to={appConstants.API_TOP_STORIES} className={classForLink[appConstants.TOP_STORIES]}>{appConstants.TOP_STORIES_TXT}</Link>
        </li>
        <li className="tab nav-item col-sm tab-item">
          <Link to={appConstants.API_NEW_STORIES} className={classForLink[appConstants.NEW_STORIES]}>{appConstants.NEW_STORIES_TXT}</Link>
        </li>
        <li className="tab nav-item col-sm tab-item">
          <Link to={appConstants.API_BEST_STORIES} className={classForLink[appConstants.BEST_STORIES]}>{appConstants.BEST_STORIES_TXT}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
