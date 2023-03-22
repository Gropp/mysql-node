//instancio o banco
const db = require('../models/index');
// instancio a tabela user
const User = db.User;
// instancio a tabela userfollow
const UserFollow = db.UserFollow;

async function createUserFollow(userFollow) {
    const createdUserFollow = await UserFollow.create(userFollow);
    console.log(createdUserFollow);
}

// createUserFollow({
//     userid: 7,
//     userFollowid: 2,
// })

async function findUser(userid) {
    const userSeek = await User.findOne({
        where: {id: userid},
        include: [
            {
            model: User,
            as: 'follows',
            // para que a consulta nao traga os dados da tabela de relacionamento, adicionamos um through para esconder esses atributos
            through: {
                attributes: []
                }
            },
            {
            model: User,
            as: 'followed',
            // para que a consulta nao traga os dados da tabela de relacionamento, adicionamos um through para esconder esses atributos
            through: {
                attributes: []
                }
            }
        ]
    });
    // traz os dois alias
    console.log(JSON.parse(JSON.stringify(userSeek)))
    // traz o alias de seguindo!
    // console.log(JSON.parse(JSON.stringify(userSeek.follows)))
    // traz o alias de seguidores!
    // console.log(JSON.parse(JSON.stringify(userSeek.followed)))
}

// vai trazer os dados das pessoas que o usuario 2 segue
findUser(2);