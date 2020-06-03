import LocalClient from './client';

class LocalAdapter implements ExternalStorage {
  private client: LocalClient;

  constructor() {
    this.client = new LocalClient();
  }

  createUser(email: string, password: string): User {
    return this.client.createUser(email, password);
  }

  findUserByEmail(email: string): User | undefined {
    return this.client.findUserByEmail(email);
  }
}

export default LocalAdapter;
