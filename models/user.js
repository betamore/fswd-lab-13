'use strict';

var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      validate: {
        notIn: [['login']]
      }
    },
    password: {
      type: DataTypes.STRING,
      set: function(val) {
        this.setDataValue('password', bcrypt.hashSync(val, 8));
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    emailKey: DataTypes.STRING
  }, {
    instanceMethods: {
      isValidPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
    },
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Task);
      }
    },
    hooks: {
      beforeCreate: function(user) {
        user.emailKey = require('crypto').randomBytes(32).toString('hex');
      },
      afterCreate: [
        function(user) {
          console.log("USER '" + user.username + "' WAS CREATED! WOO!!");
        },
        function(user) {
            console.log(user.email);
          // email address is user.email
        }
      ]
    }
  });
  return User;
};
