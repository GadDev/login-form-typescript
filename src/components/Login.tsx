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

interface CustomElement {
  target: HTMLInputElement;
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

  private setUserName(event: CustomElement) {
    this.setState({ userName: event.target.value });
  }

  private setPassword(event: CustomElement) {
    this.setState({ password: event.target.value });
  }

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
