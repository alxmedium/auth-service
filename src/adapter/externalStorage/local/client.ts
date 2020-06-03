class LocalClient {
  private users: Array<User>;

  constructor() {
    this.users = [];
  }

  createUser(email: string, password: string): User {
    const user = {
      email,
      password,
    };

    this.users.push(user);

    return user;
  }

  findUserByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }
}

export default LocalClient;
