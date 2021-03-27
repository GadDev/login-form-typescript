import { User } from '../model/Model';

class AuthService {
  userName: string;

  constructor(userName: string) {
    this.userName = userName;
  }

  public async login(
    userName: string,
    password: string,
  ): Promise<User | undefined> {
    if (this.userName === 'alex' && password === '7777') {
      return {
        userName,
        email: 'alex@alex.com',
      };
    }
    return undefined;
  }
}

export default AuthService;
