import { Component, FC } from 'react';

import { User } from '../model/Model';

interface AppState {
  user: User | undefined;
}
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component<{}, AppState> {
  render(): JSX.Element {
    return <div>Hello</div>;
  }
}

export default App;
