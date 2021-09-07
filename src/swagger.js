const swaggerAutogen = require('swagger-autogen')()

const outputFile = './src/swagger_output.json';
const endpointFiles = ['./src/app.js']


const doc = {
    info: {
        version: "1.0.0",
        title: "Code Girls API",
        description: "Projeto final desenvolvido na 3ª edição do LuizaCode",
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Produtos",
            "description": "Endpoints relacionados ao recurso de produtos."
        },
        {
            "name": "Usuario",
            "description": "Endpoints relacionados ao recurso de usuarios."
        },
        {
            "name": "Lista",
            "description": "Endpoints relacionados ao recurso de lista de compra do usuário."
        },
    ],
    definitions: {
        produtos: {
            id: 1,
            produto: "Celular",
            descricao: "Smartphone Motorola Moto G30 128GB White Lilac 4G - 4GB RAM Tela 6,5” Câm. Quádrupla + Selfie 13MP",
            marca: "Motorola",
            valor: 1.349,
            image_prod: "null",
            createdAt: "2021-09-06 14:21:40",
            updatedAt: "2021-09-06 14:21:40",
            categoriaId: 1
        },
        usuario: {
            id: 1,
            nome: "Laoma Nogueira",
            email: "laoma@gmail.com",
            cpf: "123.456.036-59",
            data_nascimento: 1985-09-15,
            senha: "12345636",
            createdAt: "2021-09-06T17:29:44.105Z",
            updatedAt: "2021-09-06T17:29:44.105Z",
            enderecoId: 1
        },
        novoUsuario: {
            id: 1,
            $nome: "Thais Minas",
            $email: "thais@gmail.com",
            $cpf: "321.456.036-59",
            $data_nascimento: 1994-08-21,
            $senha: "12345636",
            createdAt: "2021-09-06T17:29:44.105Z",
            updatedAt: "2021-09-06T17:29:44.105Z",
            enderecoId: 1
        },
    }
}





swaggerAutogen(outputFile, endpointFiles, doc)


