const Sequelize = require('sequelize')
const db = require('../db')

const Services = db.define('services', {
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
    },
},{
    scopes: {
      populated: () => ({
        include: [{all: true}]
      })
    }
  })

module.exports = Services;