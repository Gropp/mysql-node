//instancio o banco
const db = require('../models/index');
// instancio a tabela user
const User = db.User;
// instancio a tabela telephone
const Telephone = db.Telephone;
// instancia a tabela endereco
const Address = db.Address;

async function addTelephone(phone) {
    const telephoneCreate = await Telephone.create(phone);
    console.log(telephoneCreate);
}

// chamando a funcao para inserir/criar telefones
// addTelephone({
//     number: '11999872345',
//     userid: 3
// })

// funcao para fazer select nos telefones com clausula where fazendo um join em Telephone
async function findUserTelephones(userId, phoneId) {
    const user = await User.findOne({
        where: {id: userId},
        include:[
        // fazendo join com telefone
        {
            model: Telephone,
            // é possivel filtar dentro do modelo
            // por exemplo só o telefone celular
            where:{id: phoneId}
        },
        // fazendo join com endereço
        {
            model: Address
        }
        ]
    })
    // só transformamos a saida para o console.log. para remover os data definitions
    // quando mandamos para a API essas definicoes somem por definicao
    console.log(JSON.parse(JSON.stringify(user)))
}

findUserTelephones(3,1)