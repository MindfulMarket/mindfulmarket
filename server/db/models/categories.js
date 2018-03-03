const Sequelize = require('sequelize');
const db = require('../db')

const Categories = db.define('categories', {

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    imageUrl: {
        type: Sequelize.STRING
    }
}, {
    scopes: {
        populated: () => ({
            include: [{ all: true }]
        })
    }
});
module.exports = Categories;
