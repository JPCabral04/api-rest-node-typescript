import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

import { validation } from "../../shared/middleware";

// Interface para definir o formato da cidade
interface IParamProps {
    id?: number;
}

// Esquema de validação usando yup

export const deleteByIdValidation = validation((getSchema) =>({
    params : getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}));

// Função de criação
export const deleteById = async (req: Request <IParamProps>, res: Response) => {

    console.log(req.params);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não Implementado!");

};

