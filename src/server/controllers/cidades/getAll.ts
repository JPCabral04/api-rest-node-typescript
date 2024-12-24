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

    res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', 1);

    res.status(StatusCodes.OK).json([{
        id : 1,
        nome: 'Caxias do Sul',
    }])

};

