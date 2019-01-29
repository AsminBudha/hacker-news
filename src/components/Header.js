import React from 'react';

import * as appConstants from '../constants/common';
import * as localStorage from '../services/localStorage';

/**
 * Components for header part of app - App title and sign out button.
 *
 * @class Header
 * @extends {React.Component}
 */
class Header extends React.Component {
  /**
   * Updates a flag with false value which is used for whether user is logged in.
   *
   * @memberof Header
   */
  handleSignOut = () => {
    localStorage.setLocalStorage(appConstants.IS_LOGGED_IN_KEY, false);
    this.props.history.push('');
  }

  /**
   * JSX for header.
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
        <h1>{appConstants.APP_TITLE}</h1>
      </div>
    );
  }
}
export default Header;
