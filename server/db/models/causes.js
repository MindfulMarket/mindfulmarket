const Sequelize = require('sequelize');
const db = require('../db')

const Causes = db.define('causes', {
    //date created automatically
    //products/category by association
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    imageUrl: {
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
module.exports = Causes;
