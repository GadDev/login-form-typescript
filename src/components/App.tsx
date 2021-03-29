import { Component } from 'react';

import { User } from '../model/Model';
import AuthService from '../services/AuthService';
import Login from './Login';

interface AppState {
  user: User | undefined;
}
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component<unknown, AppState> {
  private authService: AuthService = new AuthService();

  constructor(props: unknown) {
    super(props);
    this.state = {
      user: {
        userName: '',
        email: '',
      },
    };
    this.setUser = this.setUser.bind(this);
  }

  private setUser(user: User) {
    this.setState({ user });
  }

  render(): JSX.Element {
    const { user } = this.state;
    return (
      <div>
        <Login authService={this.authService} setUser={this.setUser} />
        {user?.userName ? `Hello ${user?.userName}` : null}
      </div>
    );
  }
}

export default App;
