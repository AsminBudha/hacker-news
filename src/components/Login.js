import React from 'react';

import * as appConstants from '../constants/common';

/**
 * Component for login page.
 *
 * @class Login
 * @extends {React.Component}
 */
class Login extends React.Component {
  /**
   * Creates an instance of Login.
   *
   * @param {*} props
   * @memberof Login
   */
  constructor(props) {
    super(props);
    this.state = {
      emailVal: '',
      passwordVal: '',
    };
  }

  /**
   * Change state based on typed text on email.
   *
   * @param {Object} e
   * @memberof Login
   */
  handleEmailChange = (e) => {
    this.setState({
      emailVal: e.target.value,
    });
  }

  /**
   * Change state based on typed text on password.
   *
   * @param {Object} e
   * @memberof Login
   */
  handlePasswordChange = (e) => {
    this.setState({
      passwordVal: e.target.value,
    });
  }

  /**
   * Handle the submission.
   *
   * @param {Object} e Event trigerred on Submit.
   * @memberof Login
   */
  handleSignIn = (e) => {
    // console.log(e);
    e.preventDefault();
    const { emailVal, passwordVal } = this.state;

    if (!emailVal || !passwordVal) {
      return;
    }
    // if (emailVal === 'test' && passwordVal === 'test') {
    //   localStorage.setItem(appConstants.IS_LOGGED_IN_KEY, true);
    //   this.props.history.push('');
    // }
    localStorage.setItem(appConstants.IS_LOGGED_IN_KEY, true);
    this.props.history.push('');
  }

  handleSignUp = () => {
    const { emailVal, passwordVal } = this.state;

    if (!emailVal || !passwordVal) {
      return;
    }
    localStorage.setItem(appConstants.IS_LOGGED_IN_KEY, true);
    this.props.history.push('');
  }

  /**
   * JSX to render input box email, password and button for sign in and sign up.
   *
   * @returns
   * @memberof Login
   */
  render() {
    const { emailVal, passwordVal } = this.state;

    return (
      <form onSubmit={this.handleSignIn}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            value={emailVal}
            className="form-control"
            placeholder="Enter email"
            aria-describedby="emailHelp"
            onChange={this.handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={passwordVal}
            placeholder="Password"
            className="form-control"
            onChange={this.handlePasswordChange}
          />
        </div>
        <button className="btn btn-primary" type='submit' value={appConstants.SIGN_IN_TXT}>{appConstants.SIGN_IN_TXT}</button>
        <button className="btn btn-primary" type='submit' value={appConstants.SIGN_UP_TXT}>{appConstants.SIGN_UP_TXT}</button>
      </form>
    );
  }
}

export default Login;
