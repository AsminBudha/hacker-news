import React from 'react';
import { Redirect } from 'react-router-dom';

import appConstants from '../constants/common';

/**
 *
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
   *
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
   *
   *
   * @param {Object} e
   * @memberof Login
   */
  handlePasswordChang = (e) => {
    this.setState({
      passwordVal: e.target.value,
    });
  }

  /**
   *
   *
   * @memberof Login
   */
  handleSubmit = () => {
    const { emailVal, passwordVal } = this.state;

    if (emailVal === 'test' && passwordVal === 'test') {
      localStorage.setItem(appConstants.IS_LOGGED_IN_KEY, true);
      this.props.history.push('');
    }

  }
  /**
   *
   *
   * @returns
   * @memberof Login
   */
  render() {
    const { emailVal, passwordVal } = this.state;

    return (
      <div>
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
            onChange={this.handlePasswordChang}
          />
        </div>
        <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Login;
