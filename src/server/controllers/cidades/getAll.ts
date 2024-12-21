import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

import { validation } from "../../shared/middleware";

// Interface para definir o formato da cidade
interface IQueryProps {
    page? : number | null;
    limit? : number | null;
    filter? : string | null;
}

// Esquema de validação usando yup

export const getAllValidation = validation((getSchema) =>({
    query : getSchema<IQueryProps>(yup.object().shape({
        page: yup.number().notRequired().moreThan(0),
        limit: yup.number().notRequired().moreThan(0),
        filter: yup.string().notRequired(),
    })),
}));

// Função de criação
export const getAll = async (req: Request <{},{},{},IQueryProps>, res: Response) => {

    console.log(req.query);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não Implementado!");

};

