interface ExternalStorage {
  createCustomer(email: string, password: string): Promise<string>;
}
