import React from 'react';
import { Link } from 'react-router-dom';

import Common from '../constants/common';

/**
 * Component for tabs in app.
 *
 * @param {Object} props
 */
const Tabs = (props) => {
  const { pathname } = props.location;
  const classForLink = {};

  classForLink[Common.TOP_STORIES] = 'nav-link ' + (Common.API_TOP_STORIES === pathname && 'active');
  classForLink[Common.NEW_STORIES] = 'nav-link ' + (Common.API_NEW_STORIES === pathname && 'active');
  classForLink[Common.BEST_STORIES] = 'nav-link ' + (Common.API_BEST_STORIES === pathname && 'active');

  return (
    <div>
      <ul className="nav nav-tabs row tabs">
        <li className="nav-item col-sm tab-item">
          <Link to={Common.API_TOP_STORIES} className={classForLink[Common.TOP_STORIES]}>Top Stories</Link>
        </li>
        <li className="nav-item col-sm tab-item">
          <Link to={Common.API_NEW_STORIES} className={classForLink[Common.NEW_STORIES]}>New Stories</Link>
        </li>
        <li className="nav-item col-sm tab-item">
          <Link to={Common.API_BEST_STORIES} className={classForLink[Common.BEST_STORIES]}>Best Stories</Link>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
