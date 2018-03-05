const Sequelize = require('sequelize');
const db = require('../db')

const Reviews = db.define('reviews', {
    //date created automatically

    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    rating: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            min: 0.0,
            max: 5.0,
            notEmpty: true
        }
    },

    review: {
        type: Sequelize.TEXT
    }
});
module.exports = Reviews;
