/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */

import Pino from 'pino';

import Error from '../error';

export const dbPostgresConnection = async (
  Configuration: Configuration,
  Logger: Pino.Logger,
  createConnection: Function,
  entities: any[],
): Promise<void> => {
  try {
    await createConnection({
      type: 'postgres',
      host: Configuration.dbHost,
      port: Configuration.dbPort,
      username: Configuration.dbUsername,
      password: Configuration.dbPassword,
      database: Configuration.dbName,
      entities,
      synchronize: true,
      logging: false,
    });
  } catch (error) {
    Logger.error(error);

    throw new Error.PostgresConnection();
  }
};
