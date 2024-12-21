import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

// Interface para definir o formato da cidade
interface ICidade {
    nome: string;
    estado: string;
}

// Esquema de validação usando yup
const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3),
});

// Função de criação
export const create = async (req: Request, res: Response) => {
    let validateData : ICidade | undefined = undefined;
    try {
        
        validateData = await bodyValidation.validate(req.body, { abortEarly: false });

        console.log(validateData);

        res.status(StatusCodes.CREATED).json({
            message: 'Cidade criada com sucesso!',
            data: validateData,
        });

        return; 
    } catch (err) {
        const yupError = err as yup.ValidationError;
        const errors : Record<string,string> = {};

        yupError.inner.forEach(error => {
            if(!error.path) return;
            errors[error.path] = error.message;
        })

        res.status(StatusCodes.BAD_REQUEST).json({
            errors: errors
        });

        return; 
    }
};
