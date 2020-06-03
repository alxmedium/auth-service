import JWT from 'jsonwebtoken';

import AuthError from './error';

class Auth {
  private adapter: ExternalStorage;

  private configuration: Configuration;

  constructor(adapter: ExternalStorage, configuration: Configuration) {
    this.adapter = adapter;
    this.configuration = configuration;
  }

  logIn(email: string, password: string): string {
    if (!this.isValidEmail(email)) {
      throw new AuthError.InvalidEmail();
    }

    const user = this.adapter.findUserByEmail(email);

    if (!user) {
      throw new AuthError.UserNotFound();
    }

    if (!this.isPasswordMatched(user, password)) {
      throw new AuthError.PasswordDoesNotMatch();
    }

    return this.createToken(email);
  }

  signUp(email: string, password: string): User {
    if (!this.isValidEmail(email)) {
      throw new AuthError.InvalidEmail();
    }

    return this.adapter.createUser(email, password);
  }

  private createToken(email: string): string {
    return JWT.sign({ email }, this.configuration.privateKey, {
      expiresIn: '1d',
    });
  }

  private isPasswordMatched(user: User, password: string): boolean {
    if (user.password !== password) {
      return false;
    }

    return true;
  }

  private isValidEmail(email: string): boolean {
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return false;
    }

    return true;
  }
}

export default Auth;
