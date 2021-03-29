import { Component } from 'react';
import { Link } from 'react-router-dom';

import { User, UserAttributes } from '../model/Model';
import AuthService from '../services/AuthService';

interface ProfileState {
  userAttributes: UserAttributes[];
}
interface ProfileProps {
  user: User | undefined;
  authService: AuthService;
}
// eslint-disable-next-line react/prefer-stateless-function
class Profile extends Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {
      userAttributes: [],
    };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async componentDidMount() {
    const { user, authService } = this.props;
    if (user) {
      const userAttr = await authService.getUserAttributes(user);
      return this.setState({ userAttributes: userAttr });
    }
    return false;
  }

  private renderAttr() {
    const listAttr: UserAttributes[] = [];
    const { userAttributes } = this.state;

    for (const attribute of userAttributes) {
      listAttr.push({
        name: attribute.name,
        value: attribute.value,
      });
    }
    return (
      <ul>
        {listAttr.map((item) => (
          <li key={item.name}>
            {item.name}: {item.value}
          </li>
        ))}
      </ul>
    );
  }

  render(): JSX.Element {
    const { user } = this.props;
    let profile: JSX.Element;
    if (user) {
      profile = (
        <div>
          <h3>hello {user.userName}</h3>
          <p>Attributes</p>
          {this.renderAttr()}
        </div>
      );
    } else {
      profile = (
        <div>
          Please <Link to="/login">Login</Link>
        </div>
      );
    }
    return (
      <div>
        Welcome to your profile page <p>{profile}</p>
      </div>
    );
  }
}

export default Profile;
