import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll,);
router.post('/cidades', CidadesController.createValidation, CidadesController.create,);

export { router };