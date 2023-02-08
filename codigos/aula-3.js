// o index do modelo tem a descricao das tabelas
const db = require('../models/index');
// so vamos usar a tabela Users
const User = db.User;

// insert
// criacao de um objeto com as propriedades da tabela
function criarUser() {
    User.create({
        firstName: 'Henrique Samaniego',
        lastName: 'Gropp',
        cpf: '111222333-1',
        rg: '1.222.333-1',
        email: 'henrique@gmail.com'
    }).then(userCriado => console.log(userCriado));
}
//criarUser();

// update
// criacao de um objeto com as propriedades da tabela
function atualizarUser(id) {
    User.update({
        //so os campos a serem atualizados
        cpf: '111222333-6',
        rg: '1.222.333-6',
    }, {
        where: {
            id: id
        }
    }).then(userAlterado => console.log(userAlterado));
}

//atualizarUser(1);

// delete
// criacao de um objeto com as propriedades da tabela
function deletarUser(id) {
    User.destroy({
        //nao possui campos so a clausula where
        where: {
            id: id
        }
    }).then(userDeletado => console.log(userDeletado));
}

//deletarUser(1);