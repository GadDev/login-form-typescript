import React, { SyntheticEvent } from 'react';

import { User } from '../model/Model';
import AuthService from '../services/AuthService';

interface LoginProps {
  authService: AuthService;
  setUser: (user: User) => void;
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
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      loginTried: false,
      loginSuccess: false,
    };
  }

  private async handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    this.setState({ loginTried: true });
    const { authService, setUser } = this.props;
    const { userName, password } = this.state;
    const result = await authService.login(userName, password);
    if (result) {
      this.setState({ loginSuccess: true });
      setUser(result);
    } else {
      this.setState({ loginSuccess: false });
    }
  }

  private setUserName(event: CustomElement) {
    this.setState({ userName: event.target.value });
  }

  private setPassword(event: CustomElement) {
    this.setState({ password: event.target.value });
  }

  render(): JSX.Element {
    const { userName, password, loginTried, loginSuccess } = this.state;
    let loginMsg: JSX.Element | null = null;
    if (loginTried) {
      if (loginSuccess) {
        loginMsg = <span>Login successful</span>;
      } else {
        loginMsg = <span>Login failed</span>;
      }
    }
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            value={userName}
            onChange={(e) => this.setUserName(e)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => this.setPassword(e)}
          />
          <input type="submit" value="login" />
        </form>
        {loginMsg}
      </div>
    );
  }
}

export default Login;
