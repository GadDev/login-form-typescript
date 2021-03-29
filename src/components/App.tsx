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
          <Navbar user={user} />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/login"
                render={(routeProps) => (
                  <Login
                    authService={this.authService}
                    setUser={this.setUser}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...routeProps}
                  />
                )}
              />
              <Route
                exact
                path="/profile"
                render={(routeProps) => (
                  <Profile
                    authService={this.authService}
                    user={user}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...routeProps}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
