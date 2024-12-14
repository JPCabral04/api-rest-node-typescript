import express, { Request, Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

export { server };
