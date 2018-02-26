const Sequelize = require('sequelize');
const db = require('../index.js')

const Brand = db.define('brands', {
  //date created automatically
//products/category by association
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});
module.exports = Brand;
