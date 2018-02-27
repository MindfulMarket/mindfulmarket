const Sequelize = require('sequelize')
const db = require('../db')

const Products = db.define('product', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
    }
    // rating: {}
    // brandId
    //  ReviewId
    // 	CategoryId
    // 	CauseId
})

module.exports = Products;
