import Error from '../../error';

class Auth {
  private adapter: ExternalStorage;

  constructor(adapter: ExternalStorage) {
    this.adapter = adapter;
  }

  signUp(email: string, password: string): Promise<string> {
    if (!this.isValidEmail(email)) {
      throw new Error.InvalidEmail();
    }

    return this.adapter.createCustomer(email, password);
  }

  private isValidEmail(email: string): boolean {
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return false;
    }

    return true;
  }
}

export default Auth;
