const db = require('../models/index');
//essa biblioteca de metodos do sequelize é com s minusculo
//com esse metodo nao precisamos instanciar o banco neste momento
//UTILIZAR ESSE METODO QUANDO AS CONSULTAS FOREM MAIS COMPLEXAS
//ESSE METODO É MAIS RAPIDA
const sequelize = db.sequelize;

async function encontrarPorQueryId(id) {
    await sequelize.query(
        `SELECT * FROM Users WHERE id = :id`,
        {
            //passar parametros por bind
            replacements: {id: id},
            type: sequelize.QueryTypes.SELECT,
            //retorna um objeto
            raw: true,
            //retorna um array planificado
            plain:true
        }
    ).then(users => {
        console.log(users);
    })
}

//encontrarPorQueryId(500);

function encontrarPorQueryName(name) {
    sequelize.query(
        `SELECT * FROM Users WHERE firstName = :name`,
        {
            //passar parametros por bind
            replacements: {name: name},
            type: sequelize.QueryTypes.SELECT,
            //retorna um objeto
            raw: true,
            //retorna um array planificado
            plain:true
        }
    ).then(users => {
        console.log(users);
    })
}

//encontrarPorQueryName("Tammie");

async function encontrarPorQueryIdIn(idArray) {
    await sequelize.query(
        `SELECT * FROM Users WHERE id in (:idArray)`,
        {
            //passar parametros por bind
            //como os nomes sao iguais, do argumento e da variavel, nao precisa repetir
            replacements: { idArray },
            type: sequelize.QueryTypes.SELECT,
            //retorna um objeto
            raw: true,
            //retorna um array planificado
            //essa propriedade só pode ser usado quando só retorna uma linha
            //plain:true
        }
    ).then(users => {
        console.log(users);
    })
}

//encontrarPorQueryIdIn([1,2,3,4]);

async function encontrarPorQueryOffsetLimit(limit, offset) {
    await sequelize.query(
        `SELECT * FROM Users LIMIT :limit OFFSET :offset`,
        {
            //passar parametros por bind
            replacements: {limit, offset},
            type: sequelize.QueryTypes.SELECT,
            //retorna um objeto
            raw: true,
            //retorna um array planificado
            //plain:true
        }
    ).then(users => {
        console.log(users);
    })
}

//encontrarPorQueryOffsetLimit(10, 900);

async function encontrarPorQueryComLike(nome, limit) {
    await sequelize.query(
        `SELECT * FROM Users WHERE firstName LIKE :nome LIMIT :limit`,
        {
            //passar parametros por bind
            replacements: {nome, limit},
            type: sequelize.QueryTypes.SELECT,
            //retorna um objeto
            raw: true,
            //retorna um array planificado
            //plain:true
        }
    ).then(users => {
        console.log(users);
    })
}

//encontrarPorQueryComLike("%Mat%", 3);

async function encontrarPorQueryComOperadores(replacements) {
    await sequelize.query(
        `SELECT * FROM Users WHERE id <= :id or lastName = :lastname`,
        {
            //passar parametros por bind
            //passando o objeto por parametro
            //replacements: replacements,
            //nomes iguais coloca somente um
            replacements,
            type: sequelize.QueryTypes.SELECT,
            //retorna um objeto
            raw: true,
            //retorna um array planificado
            //plain:true
        }
    ).then(users => {
        console.log(users);
    })
}

encontrarPorQueryComOperadores({ id: 5, lastname: 'Faldoe' });