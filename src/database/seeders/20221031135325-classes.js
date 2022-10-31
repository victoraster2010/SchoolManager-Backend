'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('Classes', [{
    id:1,
    year:2020,
    grade_letter:'1A',
    student_quantity:25
   },{
    id:2,
    year:2020,
    grade_letter:'2A',
    student_quantity:25
   },
   {
    id:3,
    year:2020,
    grade_letter:'3A',
    student_quantity:25
   }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Classes', null, {});
  }
};
