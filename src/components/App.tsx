import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { User } from '../model/Model';
import AuthService from '../services/AuthService';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import Profile from './Profile';

interface AppState {
  user: User | undefined;
}

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component<unknown, AppState> {
  private authService: AuthService = new AuthService();

  constructor(props: unknown) {
    super(props);
    this.state = {
      user: undefined,
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
        <Router>
          <div>
            <Navbar user={user} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login">
                <Login authService={this.authService} setUser={this.setUser} />
              </Route>
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>

        {user?.userName ? `Hello ${user?.userName}` : null}
      </div>
    );
  }
}

export default App;
