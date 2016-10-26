'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    completedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.User);
      }
    },
    instanceMethods: {
      isCompleted: function() {
        return !!this.completedAt;
      },
      markCompleted: function() {
        return this.updateAttributes({completedAt: sequelize.fn('NOW')});
      }
    },
    scopes: {
      completed: {
        where: {
          completedAt: {
            $not: null
          }
        }
      },
      completedOneDayAgo: function() {
        return {
          where: {
            completedAt: {
              $gte: new Date(new Date() - (24 * 60 * 60 * 1000))
            }
          }
        }
      },
      completedDaysAgo: function(daysAgo) {
        return {
          where: {
            completedAt: {
              $gte: new Date(new Date() - (daysAgo * 24 * 60 * 60 * 1000))
            }
          }
        };
      }
    }
  });
  return Task;
};
