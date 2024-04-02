'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE TYPE "enum_storytag" AS ENUM ('hook', 'first plot point', 'midpoint', 'third plot point', 'climax', 'closure');
    `);
    await queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      storytags: {
        type: Sequelize.ARRAY(Sequelize.ENUM('hook', 'first polot point', 'midpoint', 'third plot point', 'climax', 'closure'))
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
    await queryInterface.dropTable('Songs');
    await queryInterface.sequelize.query(`
      DROP TYPE "enum_storytag";
    `);
  }
};