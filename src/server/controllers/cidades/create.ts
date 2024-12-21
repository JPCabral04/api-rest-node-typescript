import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

import { validation } from "../../shared/middleware";

// Interface para definir o formato da cidade
interface ICidade {
    nome: string;
    estado: string;
}

interface IFilter {
    filter : string;
}

// Esquema de validação usando yup

export const createValidation = validation((getSchema) =>({
    body : getSchema<ICidade>(yup.object().shape({
        nome: yup.string().required().min(3),
        estado: yup.string().required().min(3),
    })),
    query : getSchema<IFilter>(yup.object().shape({
        filter: yup.string().required().min(3),
    })),
}));

// Função de criação
export const create = async (req: Request, res: Response) => {

    console.log(req.body);

    res.status(StatusCodes.CREATED).send("Create!")

};

