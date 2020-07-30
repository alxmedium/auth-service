// eslint-disable-next-line import/no-extraneous-dependencies
import Faker from 'faker';
import { createConnection } from 'typeorm';

import Configuration from '../../../../config';
import { Entities } from '../../../../database/entity';
import PostgresClient from '../client';
import { dbPostgresConnection } from '../../../../util/dbConnection';
import Logger from '../../../../util/logger';

describe('Postgres Client', () => {
  describe('createCustomer', () => {
    describe('when creates a new customer successfully', () => {
      it('should returns the created customer', async () => {
        await dbPostgresConnection(
          Configuration,
          Logger,
          createConnection,
          Entities,
        );

        const postgresClient = new PostgresClient();
        const expectedEmail = Faker.internet.email();
        const expectedPassword = Faker.internet.password();
        const actualCustomer = await postgresClient.createCustomer(
          expectedEmail,
          expectedPassword,
        );

        expect(actualCustomer.email).toEqual(expectedEmail);
        expect(actualCustomer.password).toEqual(expectedPassword);
      });
    });
  });
});
