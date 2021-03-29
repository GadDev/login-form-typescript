import { User, UserAttributes } from '../model/Model';

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

  // eslint-disable-next-line class-methods-use-this
  public async getUserAttributes(user: User): Promise<UserAttributes[]> {
    const result: UserAttributes[] = [];
    result.push({
      name: 'description',
      value: 'Admin user',
    });
    result.push({
      name: 'age',
      value: '38',
    });
    return result;
  }
}

export default AuthService;
