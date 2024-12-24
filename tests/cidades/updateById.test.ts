import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup"


describe(("Create - updateByIF"), () => {

    it("Busca registro por ID", async () => {
        const res1 = await testServer
        .post('/cidades')
        .send({nome : 'Caxias do Sul'});

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resAtualizada = await testServer
        .put(`/cidades/${res1.body}`)
        .send({nome : 'Caxias'});

        expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
        
    })
})