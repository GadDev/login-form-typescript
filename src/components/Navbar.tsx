import { User } from 'model/Model';
import { Component } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prefer-stateless-function
class Navbar extends Component<{ user: User }> {
  render(): JSX.Element {
    const { user } = this.props;
    let loginLink: JSX.Element;
    if (user) {
      loginLink = <Link to="/logout">{user.userName}</Link>;
    } else {
      loginLink = <Link to="/login">Login</Link>;
    }

    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {loginLink}
      </div>
    );
  }
}

export default Navbar;
