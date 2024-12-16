import express, { Application } from 'express';
import 'dotenv/config'

import {router} from './routes'

const server : Application = express();

server.use(express.json());

server.use(router);

export { server };
