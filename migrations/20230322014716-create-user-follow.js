'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserFollows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      //criacao de uma chave estrangeira tabela UserFollow - users
      userid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model:'Users',
          key: 'id'
        }
      },
      //auto relacionamento para o relacionamento de muitos para muitos
      userFollowid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model:'Users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserFollows');
  }
};