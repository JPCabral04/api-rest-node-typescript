import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

// Interface para definir o formato da cidade
interface ICidade {
    nome: string;
}

// Esquema de validação usando yup
const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
});

// Função de criação
export const create = async (req: Request, res: Response) => {
    try {
        
        const validateData = await bodyValidation.validate(req.body, { abortEarly: false });

        console.log(validateData);

        res.status(StatusCodes.CREATED).json({
            message: 'Cidade criada com sucesso!',
            data: validateData,
        });

        return; 
    } catch (error) {
        const yupError = error as yup.ValidationError;

        res.status(StatusCodes.BAD_REQUEST).json({
            errors: yupError.inner.map(err => ({
                path: err.path,
                message: err.message,
            })),
        });

        return; 
    }
};
