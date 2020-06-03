interface ExternalStorage {
  createUser(email: string, password: string): User;
  findUserByEmail(email: string): User | undefined;
}
