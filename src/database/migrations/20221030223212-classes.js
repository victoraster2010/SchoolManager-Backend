'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     return queryInterface.createTable('Classes', {
      id: {
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true,
      },
      year: {
        type:Sequelize.DataTypes.INTEGER,
        allowNull: false},
      grade_letter: {
        type: Sequelize.DataTypes.STRING,
        allowNull:false
      },
      studentQuantity: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull:false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Classes');
  }
};
