'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Secretaria', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true
      },
      user_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull:false,
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull:false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Secretaria')
  }
};
