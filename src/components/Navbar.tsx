import { User } from 'model/Model';
import { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Navbar extends Component<{ user: User }> {
  render(): JSX.Element {
    return <div>Welcome to your home page</div>;
  }
}

export default Navbar;
