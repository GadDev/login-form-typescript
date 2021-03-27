import { Component, FC } from 'react';

import { User } from '../model/Model';
import AuthService from '../services/AuthService';

interface AppState {
  user: User | undefined;
}
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component<{}, AppState> {
  private authService: AuthService = new AuthService();

  render(): JSX.Element {
    return <div>Hello</div>;
  }
}

export default App;
