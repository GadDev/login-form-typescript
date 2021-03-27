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

  render(): JSX.Element {
    return (
      <div>
        <Login authService={this.authService} />
        Hello
      </div>
    );
  }
}

export default App;
