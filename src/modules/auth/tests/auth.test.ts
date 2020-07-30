/* eslint-disable max-classes-per-file */
/* eslint-disable import/no-extraneous-dependencies */

import Faker from 'faker';

import Auth from '../index';
import Error from '../../../error';
import PostgresAdapterMock from '../../../adapter/externalStorage/postgres';

describe('Auth', () => {
  describe('signUp', () => {
    describe('when the email is valid', () => {
      const expectedCreatedCustomerEmail = Faker.internet.email();

      beforeEach(() => {
        const createCustomerMock = jest
          .fn()
          .mockResolvedValue(expectedCreatedCustomerEmail);

        jest.mock(
          '../../../adapter/externalStorage/postgres',
          () =>
            class {
              createCustomer() {
                return createCustomerMock;
              }
            },
        );
      });

      it('should create a new customer', () => {
        const auth = new Auth(new PostgresAdapterMock());
        const actualCreatedCustomerEmail = auth.signUp(
          expectedCreatedCustomerEmail,
          Faker.internet.password(),
        );

        expect(actualCreatedCustomerEmail).resolves.toEqual(
          expectedCreatedCustomerEmail,
        );
      });
    });

    describe('when the email is invalid', () => {
      beforeEach(() => {
        const signUpMock = jest.fn().mockRejectedValue(Error.InvalidEmail);

        jest.mock(
          '../../../adapter/externalStorage/postgres',
          () =>
            class {
              signUp() {
                return signUpMock;
              }
            },
        );
      });

      it('should throw InvalidEmail', () => {
        const auth = new Auth(new PostgresAdapterMock());

        expect(
          auth.signUp(Faker.internet.email(), Faker.internet.password()),
        ).rejects.toEqual(Error.InvalidEmail);
      });
    });
  });
});
