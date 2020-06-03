import Configuration from '../index';

describe('Configuration', () => {
  describe('host key', () => {
    describe('when the value of the HOST environment variable is undefiend', () => {
      it('should equal to 0.0.0.0', () => {
        const actualHost = Configuration.host;
        const expectedHost = '0.0.0.0';

        expect(actualHost).toEqual(expectedHost);
      });
    });
  });

  describe('port key', () => {
    describe('when the value of the PORT environment variable is undefiend', () => {
      it('should equal to 3000', () => {
        const actualPort = Configuration.port;
        const expectedPort = 3000;

        expect(actualPort).toEqual(expectedPort);
      });
    });
  });

  describe('privateKey key', () => {
    describe('when the value of the PRIVATE_KEY environment variable is undefiend', () => {
      it('should equal to a real private key', () => {
        const actualPrivateKey = Configuration.privateKey;
        const expectedPrivateKey =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0TmFtZSI6ImFseHNtZWRpdW0iLCJ1c2VybmFtZSI6IkFsZXhpcyBOYXZhIn0.RK8hOqcN4Dz7jzGDpuMhORcPdqgEoY4Bj1pra-8pz1U';

        expect(actualPrivateKey).toEqual(expectedPrivateKey);
      });
    });
  });
});
