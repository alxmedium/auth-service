import Configuration from '../index';

describe('Configuration', () => {
  describe('serviceHost key', () => {
    describe('when the value of the environment variable called HOST is undefiend', () => {
      it('should be equal to 0.0.0.0', () => {
        const actualHost = Configuration.serviceHost;
        const expectedHost = '0.0.0.0';

        expect(actualHost).toEqual(expectedHost);
      });
    });
  });

  describe('servicePort key', () => {
    describe('when the value of the environment variable called PORT is undefiend', () => {
      it('should be equal to 3000', () => {
        const actualPort = Configuration.servicePort;
        const expectedPort = 3000;

        expect(actualPort).toEqual(expectedPort);
      });
    });
  });

  describe('privateKey key', () => {
    describe('when the value of the environment variable called PRIVATE_KEY is undefiend', () => {
      it('should be equal to a real private key', () => {
        const actualPrivateKey = Configuration.privateKey;
        const expectedPrivateKey =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0TmFtZSI6ImFseHNtZWRpdW0iLCJ1c2VybmFtZSI6IkFsZXhpcyBOYXZhIn0.RK8hOqcN4Dz7jzGDpuMhORcPdqgEoY4Bj1pra-8pz1U';

        expect(actualPrivateKey).toEqual(expectedPrivateKey);
      });
    });
  });

  describe('dbHost', () => {
    describe('when the value of the environment variable called DB_HOST is undefiend', () => {
      it('should be equal to a 127.0.0.1', () => {
        const actualDBHost = Configuration.dbHost;
        const expectedDBHost = '127.0.0.1';

        expect(actualDBHost).toEqual(expectedDBHost);
      });
    });
  });

  describe('dbPort', () => {
    describe('when the value of the environment variable called DB_PORT is undefiend', () => {
      it('should be equal to a 5432', () => {
        const actualDBPort = Configuration.dbPort;
        const expectedDBPort = 5432;

        expect(actualDBPort).toEqual(expectedDBPort);
      });
    });
  });

  describe('dbUsername', () => {
    describe('when the value of the environment variable called DB_USERNAME is undefiend', () => {
      it('should be equal to a alxmedium-auth-service', () => {
        const actualDBUsername = Configuration.dbUsername;
        const expectedDBUsername = 'alxmedium-auth-service';

        expect(actualDBUsername).toEqual(expectedDBUsername);
      });
    });
  });

  describe('dbPassword', () => {
    describe('when the value of the environment variable called DB_PASSWORD is undefiend', () => {
      it('should be equal to a alxmedium-auth-service-password', () => {
        const actualDBPassword = Configuration.dbPassword;
        const expectedDBPassword = 'alxmedium-auth-service-password';

        expect(actualDBPassword).toEqual(expectedDBPassword);
      });
    });
  });

  describe('dbName', () => {
    describe('when the value of the environment variable called DB_NAME is undefiend', () => {
      it('should be equal to a alxmedium-auth', () => {
        const actualDBName = Configuration.dbName;
        const expectedDBName = 'alxmedium-auth';

        expect(actualDBName).toEqual(expectedDBName);
      });
    });
  });
});
