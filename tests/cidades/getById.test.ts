import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup"


describe(("Create - getById"), () => {

    it("Busca registro por ID", async () => {
        const res1 = await testServer
        .post('/cidades')
        .send({nome : 'Caxias do Sul'});

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resBuscada = await testServer
        .get(`/cidades/${res1.body}`)
        .send();

        expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
        
    })
})