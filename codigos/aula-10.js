//Transaction
const db = require('../models/index');
const User = db.User;

async function userCreate(){
    const transacao = await db.sequelize.transaction();
    try {
        await User.create({
            firstName: 'Cezar',
            lastName: 'Auriquio',
            cpf: '1234567890',
            rg: '21324354-0',
            email:'cezar@gmail.com',
        }, {transaction: transacao})

        // erro proposital
        // console.log(testedeerro)

        await User.create({
            firstName: 'Neuza',
            lastName: 'Francisco',
            cpf: '1234567890',
            rg: '21324354-0',
            email:'neuza@gmail.com',
        }, {transaction: transacao})

        // em caso de sucesso de TODAS as transacoes o sistema commita...
        await transacao.commit();
        console.log('cadastrou');

    } catch (error) {
        // em caso de erro em uma ou mais transacoes, todas as transacões sao desfeitas
        await transacao.rollback();
        console.log('Deu errado');
    }
}

//chama a função
//userCreate();

// uma forma melhor para trabalhar com transaction
// criando uma função de transaction para garantir a integridade do banco
// a função ja garante o commit

async function createUserTransaction() {
    try {
        const result = await db.sequelize.transaction(async (t) => {
            await User.create({
                firstName: 'Emilia',
                lastName: 'Francisco',
                cpf: '1234567890',
                rg: '21324354-0',
                email:'neuza@gmail.com',
            }, {transaction: t})

            await User.create({
                firstName: 'Neuza',
                lastName: 'Francisco',
                cpf: '1234567890',
                rg: '21324354-0',
                email:'neuza@gmail.com',
            }, {transaction: t})

            return true;
        })

        console.log('usuarios cadastrados com sucesso!')
    } catch (error) {
        console.log(error)
    }
}

createUserTransaction();