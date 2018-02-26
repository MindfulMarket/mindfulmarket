const Sequelize = require('sequelize')
const db = require('../db')

const PaymentInfo = db.define('paymentInfo', {
    cardNumber: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            len: [14, 15]
        },
    },
    expirationDate: {
        type: Sequelize.STRING,
        validate: {
            len: [4, 4]
        },
    },
    threeDigiCode: {
        type: Sequelize.STRING,
        validate: {
            len: [3, 3]
        },
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    billingAdress: {
        type: Sequelize.STRING,
    },
})

module.exports = PaymentInfo;