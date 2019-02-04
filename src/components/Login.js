import React from 'react';

import httpLogin from '../services/httpLogin';
import * as appConstants from '../constants/common';
import * as localStorage from '../services/localStorage';

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

    this.submitBtnType = '';
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
   * This function check whethers submit is triggered from sign in or sign up.
   * And calls respective function.
   *
   * @param {Object} e
   * @memberof Login
   */
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.submitBtnType === appConstants.SIGN_IN_TXT) {
      this.handleSignIn();
    } else {
      this.handleSignUp();
    }
  }

  /**
   * Handle sign in.
   * Checks if username and password match and redirect to home page else alert.
   *
   * @memberof Login
   */
  handleSignIn = () => {
    const { emailVal, passwordVal } = this.state;

    if (!emailVal || !passwordVal) {
      return;
    }

    const apiCall = httpLogin.signIn(emailVal, passwordVal);

    apiCall
      .then((res) => {
        const result = res.data.result;

        if (result.success) {
          localStorage.setLocalStorage(appConstants.IS_LOGGED_IN_KEY, true);
          this.props.history.push('');
        } else {
          alert(result.message);
        }
      })
      .catch(() => {
        alert('Unexpected Error');
      });
  }

  /**
   * Handle Sign up.
   * Check if email is already stored.
   * If not already used store it and redirect to home page else alert.
   *
   * @memberof Login
   */
  handleSignUp = () => {
    const { emailVal, passwordVal } = this.state;

    if (!emailVal || !passwordVal) {
      return;
    }

    const apiCall = httpLogin.signUp(emailVal, passwordVal);

    apiCall
      .then((res) => {
        const result = res.data.result;

        if (result.success) {
          localStorage.setLocalStorage(appConstants.IS_LOGGED_IN_KEY, true);

          this.props.history.push('');
        } else {
          alert(result.message);
        }
      })
      .catch(() => {
        alert('Unexpected Error');
      });
  }

  /**
   * Stores flag or text in variable.
   * This flag helps to redirect to respective function in handleSubmit function.
   *
   * @param {Object} e
   * @memberof Login
   */
  assignSubmitBtnType = (e) => {
    this.submitBtnType = e.target.value;
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
      <form onSubmit={this.handleSubmit}>
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
        <button
          type='submit'
          className="btn btn-primary"
          value={appConstants.SIGN_IN_TXT}
          onClick={this.assignSubmitBtnType}
        >
          {appConstants.SIGN_IN_TXT}
        </button>
        <button
          type='submit'
          value={appConstants.SIGN_UP_TXT}
          onClick={this.assignSubmitBtnType}
          className="btn btn-primary btn-signup"
        >
          {appConstants.SIGN_UP_TXT}
        </button>
      </form>
    );
  }
}

export default Login;
