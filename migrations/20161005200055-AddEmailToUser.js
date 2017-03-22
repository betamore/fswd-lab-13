'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Users', 'email', Sequelize.STRING);
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('Users', 'email');
  }
};
