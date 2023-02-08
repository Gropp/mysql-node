const db = require('../models/index');
const User = db.User;


// inserindo varios registros de uma so vez na tabela
function criarAllUser() {
    const users = [
        {
            firstName: 'Elisa Samaniego',
            lastName: 'Ramirez',
            cpf: '111222333-2',
            rg: '1.222.333-2',
            email: 'elisa@gmail.com'
        },
        {
            firstName: 'Olivia Samaniego',
            lastName: 'Gropp',
            cpf: '111222333-3',
            rg: '1.222.333-3',
            email: 'olivia@gmail.com'
        },
        {
            firstName: 'Jaqueline Samaniego',
            lastName: 'Ramirez',
            cpf: '111222333-4',
            rg: '1.222.333-4',
            email: 'jaqueline@gmail.com'
        },
        {
            firstName: 'Ramon',
            lastName: 'Ramirez',
            cpf: '111222333-5',
            rg: '1.222.333-5',
            email: 'ramon@gmail.com'
        }
    ]
    User.bulkCreate(
        users
    ).then(userCriado => console.log(userCriado));
}

criarAllUser();