import { createServer } from 'http';

import expressApp from './src/api/app';
import logger from './src/util/logger';

const PORT: number = Number(process.env.PORT) || 3000;
const HOST: string = process.env.HOST || '0.0.0.0';

const server = createServer(expressApp);

server.listen(PORT, HOST, () => {
  logger.info(`auth-service is running at http://${HOST}:${PORT}`);
});
