import React from 'react';

import appConstants from '../constants/common';
import * as localStorage from '../services/localStorage';

/**
 *
 *
 * @class Header
 * @extends {React.Component}
 */
class Header extends React.Component {
  /**
   *
   *
   * @memberof Header
   */
  handleSignOut = () => {
    localStorage.setLocalStorage(appConstants.IS_LOGGED_IN_KEY, false);
    this.props.history.push('');
  }

  /**
   *
   *
   * @returns
   * @memberof Header
   */
  render() {

    return (
      <div className='head-title'>
        <div className='header-icon'>
          <i className="fas fa-sign-out-alt" onClick={this.handleSignOut}></i>
        </div>

        <h1>Hacker News</h1>
      </div>
    );
  }
}
export default Header;
