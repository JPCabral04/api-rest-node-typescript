import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.post('/cidades', CidadesController.createValidation, CidadesController.create,);
router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll,);
router.get('/cidades/:id', CidadesController.getByIdValidation, CidadesController.getById,);

export { router };