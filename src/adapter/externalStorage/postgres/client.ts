import 'reflect-metadata';
import { getConnection } from 'typeorm';

// Entities
import Entity from '../../../database/entity';

// Utils
import Logger from '../../../util/logger';

class PostgresClient {
  async createCustomer(email: string, password: string): Promise<Customer> {
    try {
      const userRepository = getConnection().getRepository(Entity.Customer);
      const createdCustomer = await userRepository.save(
        await userRepository.create({ email, password }),
      );

      return createdCustomer;
    } catch (error) {
      Logger.error(error);

      throw error;
    }
  }
}

export default PostgresClient;
