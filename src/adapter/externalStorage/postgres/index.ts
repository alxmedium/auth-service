import PostgresClient from './client';

class PostgresAdapter implements ExternalStorage {
  private client: PostgresClient;

  constructor() {
    this.client = new PostgresClient();
  }

  async createCustomer(email: string, password: string): Promise<string> {
    const customer: Customer = await this.client.createCustomer(
      email,
      password,
    );

    return customer.email;
  }
}

export default PostgresAdapter;
