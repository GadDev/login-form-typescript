import { User } from '../model/Model';

class AuthService {
  // eslint-disable-next-line class-methods-use-this
  public async login(
    userName: string,
    password: string,
  ): Promise<User | undefined> {
    if (userName === 'alex' && password === '7777') {
      return {
        userName,
        email: 'alex@alex.com',
      };
    }
    return undefined;
  }
}

export default AuthService;
