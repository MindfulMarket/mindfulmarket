const Sequelize = require('sequelize');
const db = require('../index.js')

const Review = db.define('reviews', {
  //date created automatically

  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  rating: Sequelize.FLOAT,
  allowNull: false,
  validate: {
    min: 0.0,
    max: 5.0,
    notEmpty: true
  },

  content: Sequelize.TEXT
});
module.exports = Review;
