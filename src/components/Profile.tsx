import { Component } from 'react';

import { User } from '../model/Model';
import { AuthService } from '../services/AuthService';

interface ProfileState {
  userAttributes: UserAttributes[];
}
interface ProfileProps {
  user: User | undefined;
  authService: AuthService;
}
// eslint-disable-next-line react/prefer-stateless-function
class Profile extends Component<ProfileProps, ProfileState> {
  render(): JSX.Element {
    return <div>Welcome to your profile page</div>;
  }
}

export default Profile;
