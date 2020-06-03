// eslint-disable-next-line no-unused-vars
import Express, { Request, Response } from 'express';

const app = Express();

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World!',
  });
});

export default app;
