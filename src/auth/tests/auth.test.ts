// eslint-disable-next-line import/no-extraneous-dependencies
import Faker from 'faker';

import Auth from '../index';
import AuthError from '../error';
import LocalAdapter from '../../adapter/externalStorage/local';
import Configuration from '../../config';

describe('Auth', () => {
  const auth = new Auth(new LocalAdapter(), Configuration);

  describe('logIn', () => {
    describe('when the email is valid', () => {
      describe('when the user is signed up', () => {
        const email = 'alexmedium@alexmedium.com';
        const password = Faker.internet.password();

        auth.signUp(email, password);

        describe('when the password is correct', () => {
          it('should return a token with a valid signature', () => {
            const actualToken = auth.logIn(email, password);
            const actualTokenSignature = actualToken.split('.')[0];
            const privateKeySignature = Configuration.privateKey.split('.')[0];

            expect(actualTokenSignature).toEqual(privateKeySignature);
            expect(() => {
              auth.logIn(email, password);
            }).not.toThrow(new AuthError.InvalidEmail());
            expect(() => {
              auth.logIn(email, password);
            }).not.toThrow(new AuthError.UserNotFound());
            expect(() => {
              auth.logIn(email, password);
            }).not.toThrow(new AuthError.PasswordDoesNotMatch());
          });
        });
      });
    });

    describe('when the email is invalid', () => {
      it('should throw the InvalidEmail Error', () => {
        const expectedError = new AuthError.InvalidEmail();

        expect(() => {
          auth.logIn(Faker.internet.userName(), Faker.internet.password());
        }).toThrow(expectedError);
      });
    });

    describe('when the user is not signed up', () => {
      it('should throw the UserNotFound Error', () => {
        const expectedError = new AuthError.UserNotFound();

        expect(() => {
          auth.logIn(Faker.internet.email(), Faker.internet.password());
        }).toThrow(expectedError);
      });
    });

    describe('when the password is incorrect', () => {
      it('should throw the PasswordDoesNotMatch Error', () => {
        const email = Faker.internet.email();
        const password = Faker.internet.password();
        const expectedError = new AuthError.PasswordDoesNotMatch();

        auth.signUp(email, password);

        expect(() => {
          auth.logIn(email, Faker.internet.password());
        }).toThrow(expectedError);
      });
    });
  });

  describe('signUp', () => {
    describe('when the user email is valid', () => {
      it('should sign up the user', () => {
        const expectedUser: User = {
          email: Faker.internet.email(),
          password: Faker.internet.password(),
        };
        const actualUser = auth.signUp(
          expectedUser.email,
          expectedUser.password,
        );

        expect(actualUser).toEqual(expectedUser);
      });
    });

    describe('when the user email is invalid', () => {
      it('should throw the InvalidEmail Error', () => {
        const expectedError = new AuthError.InvalidEmail();

        expect(() => {
          auth.signUp(Faker.internet.userName(), Faker.internet.password());
        }).toThrow(expectedError);
      });
    });
  });
});
