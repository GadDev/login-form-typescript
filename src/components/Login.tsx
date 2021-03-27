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
    loginTried: false,
    loginSuccess: false,
  };

  render(): JSX.Element {
    return <div>Login</div>;
  }
}

export default Login;
