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
            "description": "Endpoints relacionados aos recursos de produtos"
        },
        {
            "name": "Usuarios",
            "description": "Endpoints relacionados aos recursos de usuarios"
        },
        {
            "name": "Listas",
            "description": "Endpoints relacionados a lista de compras de usuários"
        },
        {
            "name": "Lojas",
            "description": "Endpoints para listagem de endereço das lojas fisicas"
        },
    ],
    definitions: {
        Produtos: {
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
        Usuario: {
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
        NovoUsuario: {
            id: 1,
            $nome: "Thais Minas",
            $email: "thais@gmail.com",
            $cpf: "321.456.036-59",
            $data_nascimento: 1994-08-21,
            $senha: "12345636",
            createdAt: "2021-09-06T17:29:44.105Z",
            updatedAt: "2021-09-06T17:29:44.105Z",
            $enderecoId: 1
        },
        AtualizarUsuario: {
            nome: "Thais Minas",
            email: "thais@gmail.com",
            data_nascimento: '1994-08-21',
            senha: "12345636",
            enderecoId: 1
        },
        AdicionarProdutoLista: {
            numero_pedido: 123123,
            quantidade: 1,
            LojaId: 1,
            UsuarioId: 1,
            ProdutoId: 6,
        },
        Lista: {
            id: 1,
            numero_pedido: 123123,
            quantidade: 1,
            data_entrega: '21-08-2021 20:57:55',
            data_finalizacao: '2021-09-09 20:57:55',
            createdAt: '2021-09-09 20:57:55',
            LojaId: 1,
            UsuarioId: 1,
            ProdutoId: 1
        },
        Lojas: {
            id: 1,
            nome: 'Loja Centro',
            logradouro: 'Av. Amazonas',
            numero: 2000,
            complemento: '17 andar',
            bairro: 'Centro',
            cidade: 'Belo Horizonte',
            estado: 'MG',
            cep: '31800-000',
            telefone: '319888-8888',
            createdAt: '2021-09-09 20:56:47',
            updatedAt: '2021-09-09 20:56:47'
        }
    }
}





swaggerAutogen(outputFile, endpointFiles, doc)


