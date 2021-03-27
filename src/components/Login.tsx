import React from 'react';

import AuthService from '../services/AuthService';

interface LoginProps {
  authService: AuthService;
}

interface LoginState {
  userName: string;
  password: string;
  loginTried: boolean;
  loginSuccess: boolean;
}

// eslint-disable-next-line react/prefer-stateless-function
class Login extends React.Component<LoginProps, LoginState> {
  // eslint-disable-next-line react/state-in-constructor
  state: LoginState = {
    userName: '',
    password: '',
    // eslint-disable-next-line react/no-unused-state
    loginTried: false,
    // eslint-disable-next-line react/no-unused-state
    loginSuccess: false,
  };

  render(): JSX.Element {
    const { userName, password } = this.state;
    return (
      <div>
        <form>
          <input type="text" value={userName} />
          <input type="password" value={password} />
          <input type="submit" value="login" />
        </form>
      </div>
    );
  }
}

export default Login;
