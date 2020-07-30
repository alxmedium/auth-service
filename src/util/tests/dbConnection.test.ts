import { dbPostgresConnection } from '../dbConnection';
import LoggerMock from '../logger';
import Error from '../../error';

jest.mock('../logger');

describe('dbPostgresConnection', () => {
  const configuration: Configuration = {
    dbHost: 'dbHost',
    dbPort: 5432,
    dbUsername: 'dbUsername',
    dbPassword: 'dbPassword',
    dbName: 'dbName',
    privateKey: 'privateKey',
    serviceHost: 'serviceHost',
    servicePort: 1234,
  };
  const createConnectionMock = jest.fn().mockResolvedValue(undefined);
  const createConnectionErrorMock = jest
    .fn()
    .mockRejectedValue(new Error.PostgresConnection());

  beforeEach(() => {
    createConnectionMock.mockClear();
    createConnectionErrorMock.mockClear();
  });

  describe('when can connects with the Postgres Database', () => {
    it('should not raise PostgresConnection', () => {
      expect(
        dbPostgresConnection(
          configuration,
          LoggerMock,
          createConnectionMock,
          [],
        ),
      ).resolves.toEqual(undefined);
    });
  });

  describe('when cant connects with the Postgres Database', () => {
    it('should raise PostgresConnection', () => {
      expect(
        dbPostgresConnection(
          configuration,
          LoggerMock,
          createConnectionErrorMock,
          [],
        ),
      ).rejects.toEqual(new Error.PostgresConnection());
    });
  });
});
