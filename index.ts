import type { Express, Request, Response, RequestHandler, NextFunction } from 'express';
import express from 'express'
import dotenv from 'dotenv';
import requestID from 'express-request-id';


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(requestID())
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});