import React from 'react';

import AuthService from '../services/AuthService';

interface LoginState {
  authService: AuthService;
}

// eslint-disable-next-line react/prefer-stateless-function
class Login extends React.Component<LoginState> {
  render(): JSX.Element {
    return <div>Login</div>;
  }
}

export default Login;
