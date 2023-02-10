//carrega o modelo do banco
const { json } = require('sequelize');
const db = require('../models/index');
//para buscas mais refinadas o sequelize oferece uma biblioteca de operadores
//a biblioteca dos operadores é Sequelize com S maiusculo
const Op = db.Sequelize.Op;
//carrego somente a table User do banco
const User = db.User;

//select usando a chave primaria da table PK, como é uma promisse vamos tratar com then
function encontrarPorId(id) {
    User.findByPk(id).then(user => {
        //formata a saida para um json - uma das opçoes
        console.log(JSON.stringify(user));
    })
}

//encontrarPorId(5);

//select usando atributo - where, retorna só uma tupla, como é uma promisse vamos tratar com then
function encontrarPorName(name) {
    User.findOne({
        //se fosse para retornar todas as colunas da table era só remover os atributos
        attributes: ['firstName', 'LastName'],
        //where é um objeto, pode ser mais de um filtro
        where: {
            firstName: name
        },
        //option do sequelize para formatar o resultado da query
        raw: true,
    }).then(user => {
        console.log(user);
    })
}

//ncontrarPorName('Palmer');

//select usando um range de ids - where id in (1,2,3) , retorna vários registros, como é uma promisse vamos tratar com then
function encontrarComIdIn(arrayIds) {
    User.findAll({
        //se fosse para retornar todas as colunas da table era só remover os atributos
        attributes: ['firstName', 'LastName'],
        //where é um array de ids
        where: {
            id: arrayIds,
        },
        //option do sequelize para formatar o resultado da query
        raw: true,
    }).then(user => {
        console.log(user);
    })
}

//encontrarComIdIn([1,2,3,4,5]);

//select usando limit e offset para paginacao, traz os dados baseados na divisao das views do frontend sem parametros
function encontrarComLimiteEOffset() {
    User.findAll({
        //se fosse para retornar todas as colunas da table era só remover os atributos
        attributes: ['firstName', 'LastName', 'cpf', 'rg', 'email'],
        offset:990,
        limit:10,
        //option do sequelize para formatar o resultado da query
        raw: true,
    }).then(user => {
        console.log(user);
    })
}

//encontrarComLimiteEOffset();

//select usando os operadores Op do Sequelize
function encontrarComLike(name) {
    User.findAll({
        //se fosse para retornar todas as colunas da table era só remover os atributos
        attributes: ['id', 'firstName', 'LastName', 'cpf', 'rg', 'email'],
        //where é um array de valores
        where: {
            firstName:{
                [Op.like]: name,
            }
        },
        //vamos limitar em 10 registros para ficar facil de ver no terminal
        limit:10,
        //option do sequelize para formatar o resultado da query
        raw: true,
    }).then(user => {
        console.log(user);
    })
}

//encontrarComLike('%mi%');
//encontrarComLike('ad%');

//select usando os operadores Op do Sequelize
function encontrarComOr(id, lname) {
    User.findAll({
        //se fosse para retornar todas as colunas da table era só remover os atributos
        attributes: ['id', 'firstName', 'LastName', 'cpf', 'rg', 'email'],
        //where é um array de valores para fazer um OR com dois filtros
        // vai ser um or com dois argumentos
        where: {
            [Op.or]:[
                {
                    id: {
                        [Op.lte] : id
                    }
                },
                {
                    lastName: lname
                }
            ]
        },
        //vamos limitar em 10 registros para ficar facil de ver no terminal
        //limit:10,
        //option do sequelize para formatar o resultado da query
        raw: true,
    }).then(user => {
        console.log(user);
    })
}

//encontrarComOr(5, 'Harpham')