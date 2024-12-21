import express, { Application } from 'express';
import 'dotenv/config'

import './shared/services/traducoesYup';

import {router} from './routes'

const server : Application = express();

server.use(express.json());

server.use(router);

export { server };
