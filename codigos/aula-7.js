// importamos o index do model, pois ele referencia todas as tabelas
db = require('../models/index');
const User = db.User;
const Address = db.Address;

//adiciona um endereço
async function addAddress(address) {
    const addressCreate = await Address.create(address);
    console.log(addressCreate);
}

// addAddress({
//     street_avenue: 'Rua Campinas, 000',
//     complement: 'Apartamento',
//     city: 'Curitiba',
//     state: 'Paraná',
//     zipcode: '11.999-000',
//     country: 'Brazil',
//     userid: 1,
// })

//SELECT PARA PROCURAR ENDERECO POR ID E TRAZER O USER
async function searchAddressId(addressid) {
    const address = await Address.findOne({
        where: {id: addressid},
        include: [{
            model: User,
        }],
        raw: true,
        //aninha os objetos da consulta
        nest: true,
        logging: true,
    })
    console.log(address)
}

//searchAddressId(1);

//SELECT PARA PROCURAR USER POR ID E TRAZER O ENDERECO
async function searchUserIdAdress(userid) {
    const userAddress = await User.findOne({
        where: {id: userid},
        include: [{
            model: Address,
        }],
        raw: true,
        //aninha os objetos da consulta
        nest: true,
    })
    console.log(userAddress)
}

//searchUserIdAdress(1)


//SELECT PARA PROCURAR USER POR TODOS ID E TRAZER O ENDERECO
async function searchAllUserIdAdress() {
    const userAddress = await User.findAll({
        //esse where se aplica a tabela Users
        where: {

        },
        include: [{
            model: Address,
            //por default o findAll faz um left outter join, trazendo endereços nulos
            //para corrigir e fazer um inner join use o atributo: required para vir somente os cadastros com endereco
            required: true,
            //esse where se aplica a tabla Address
            where:{

            },
        }],
        raw: true,
        //aninha os objetos da consulta
        nest: true,
    })
    console.log(userAddress)
}

searchAllUserIdAdress()